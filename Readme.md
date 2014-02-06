# Corpora

There data is still too hard to find and access. We need to make it accessible so we can start doing natural language processing and machine learning at a faster rate.

## Current Datasets

Data that's been curated:

- List of Atoms (Wikipedia): https://github.com/corpora/atoms
- List of Organisms (PubMed Taxonomy): https://github.com/corpora/organisms

## Overview

Basically here is the workflow for converting the data into JSON:

- go to websites that offer multiple CSVs, PDFs, or other difficult data formats
- download them
- hack together a quick script to extract out the info into JSON objects
- save to a `data.json` file

Sometimes there are millions of records in these places, so writing to a single file is not realistic. Instead what works is writing them to MongoDB, then exporting the mongodb data out as JSON. See what works.

Machine learning and natural language processing depends on quality data (though you'd think you could use that to _get_ the quality data lol). There are great sites like Freebase and DBPedia and others, but they have APIs with limited access. Instead, the data should be hand-crafted and publicly available in an easy way. OpenData.org isn't there yet imo, it's still just links out to most of the data and you have to end up having to parse it and clean it up yourself anyways. Eventually though, we'll have the data.

## How to use

Some of the corpora repos have `data.json` files that are super large, way too large to open in a text editor. So for now you can just either create a readstream to use them, or just import them directly into mongodb or another database. Maybe eventually those larger repos should be broken down into simpler files.

## Licence

- MIT
- Reading in Bed icon by Ben Hsu from The Noun Project