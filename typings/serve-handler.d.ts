declare module 'serve-handler' {
    import { IncomingMessage, ServerResponse } from 'http';

    interface Rewrite {
        source: string;
        destination: string;
    }

    interface Options {
        public?: string;
        cleanUrls?: boolean | string[];
        rewrites?: Rewrite[];
        redirects?: Rewrite[];
        headers?: Rewrite[];
        directoryListing?: boolean | string[];
        unlisted?: string[];
        trailingSlash?: boolean;
        renderSingle?: boolean;
    }

    const handler: (request: IncomingMessage, response: ServerResponse, options?: Options) => void;

    export = handler;
}
