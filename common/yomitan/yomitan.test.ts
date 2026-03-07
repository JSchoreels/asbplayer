import { DictionaryTrack, defaultSettings } from '@project/common/settings';
import { Fetcher } from '@project/common/src/fetcher';
import { Yomitan } from './yomitan';

class MockFetcher implements Fetcher {
    calls: { url: string; body: any }[] = [];

    async fetch(url: string, body: any): Promise<any> {
        this.calls.push({ url, body });
        return [{ index: 0, content: [] }];
    }
}

it('passes parser for bulk tokenization', async () => {
    const parser = 'unit-test-parser';
    const dictionaryTrack: DictionaryTrack = {
        ...defaultSettings.dictionaryTracks[0],
        dictionaryYomitanParser: parser,
    };
    const fetcher = new MockFetcher();
    const yomitan = new Yomitan(dictionaryTrack, fetcher);

    await yomitan.tokenizeBulk(['test']);

    expect(fetcher.calls).toHaveLength(1);
    expect(fetcher.calls[0].body).toEqual({
        text: ['test'],
        scanLength: dictionaryTrack.dictionaryYomitanScanLength,
        parser,
    });
});
