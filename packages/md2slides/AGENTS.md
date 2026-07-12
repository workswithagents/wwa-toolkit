# md2slides

Parse markdown separated by `---` horizontal rules into individual slides. Each slide becomes a `<section>` in a single self-contained HTML file with minimal CSS for presentation. No external dependencies — the output must be a standalone HTML file that works offline. Support basic markdown: headings, lists, code blocks, bold, italic, links, images. Unsupported markdown features should degrade gracefully.
