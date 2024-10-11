import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots{
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [],
        },
        sitemap: `https://web.hermanostengen.com/sitemap.xml`
    }
}