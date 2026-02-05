---
name: "The Platform Gravity Problem: Why the Middle Is Collapsing in AI"
slug: "the-platform-gravity-problem-why-the-middle-is-collapsing-in-ai"
domain: "decoding-ai"
function: "ai"
author: "aryan-kargwal"
featured: false
clap-count: 12
read-time: ""
created-on: "2025-12-14T05:21:38.000Z"
---

On October 6, 2025, [OpenAI unveiled Agent Kit](https://openai.com/index/introducing-agentkit/)— a drag-and-drop interface for creating autonomous AI agents — during its DevDay keynote. Within hours, founder group chats lit up: *did OpenAI just kill our category?*

For months, dozens of startups had been building orchestration frameworks, router layers, and agent SDKs to connect models to APIs and automate workflows. Now OpenAI has folded those same ideas directly into its own platform. Nothing new, we have seen this with Salesforce, Meta and Microsoft for decades.

You can already see traces of borrowed open-source logic in the demos. It’s rough, but the trajectory is obvious: in time, OpenAI’s native tools will likely absorb what sits between the model and the user.

That’s the platform gravity problem. Every major ecosystem — from OpenAI and Anthropic to Google and Perplexity — is pulling the stack inward. Middle-layer players are getting squeezed as orchestration, routing, and workflow tools collapse into the platforms themselves.

This article looks at why that’s happening, what it means for builders caught between integration and independence, and how some teams are learning to escape gravity by going deeper into user context instead of competing at the surface.

## What is platform gravity?

Economically, platform gravity most closely resembles economies of scope — the cost advantage a company gains by expanding horizontally across complementary functions. When a firm offers several related products or services under one system, it becomes cheaper and more efficient for customers to use them together than to manage separate vendors.

According to [Wikipedia](https://en.wikipedia.org/wiki/Economies_of_scope), economies of scope arise when shared inputs or processes reduce the total cost of production across offerings.

In the AI context, platforms like OpenAI can pull entire markets inward: by bundling model APIs, fine-tuning, evaluation, and orchestration into a single ecosystem, they make integration almost frictionless and exiting disproportionately costly.

## The Three Forces That Create Gravity

Every platform’s pull comes from a set of self-reinforcing dynamics — **data**, **tooling**, and **distribution**. Each begins as a simple scaling advantage but, over time, compounds into dependency.

### Data gravity

Data gravity is the first and strongest pull. It describes how every new user interaction — a prompt, a search query, a workflow — creates proprietary data that improves the platform for the next one.

That feedback loop is what makes AI platforms compound faster than traditional software.

![](https://cdn.prod.website-files.com/6410c4927a4ae326761f2b26/693e4962ead4cde5fe8f0958_2b9f28dd.png)

Reachy Mini

‍

Consider [Hugging Face](https://huggingface.co/) (France), which benefits from community-driven data: every uploaded dataset and model evaluation feeds its open-source recommendation algorithms, making it the de facto discovery layer for AI models.

Now, with [Reachy Mini](https://huggingface.co/blog/reachy-mini), the company is extending that gravity from model discovery into interaction — aiming to build one of the most distributed AI assistant ecosystems in the open-source world.

### Tooling gravity

Tooling gravity forms when a platform’s SDKs, APIs, or workflow engines become part of how people actually get work done. Once teams build around a tool’s logic, it turns from convenience into infrastructure — hard to replace, even when new options appear.

[Make](https://www.make.com/en) (formerly Integromat) shows this clearly. Long before AI agents and orchestration frameworks like **n8n** or **LangChain**, Make was already automating tasks through visual logic blocks and modular workflows.

With a library of **3,000+ pre-built apps** and adoption across **500,000+ organizations**, it became the universal connector for business operations — from CRMs to internal tools. Companies embed Make so deeply into their daily workflows that migration now feels like surgery.

OpenAI and others are folding similar orchestration layers into their platforms, but they still struggle to replace tools like Make — because for many teams, Make *is* the workflow.

### Distribution gravity

Distribution gravity emerges when a platform controls not just what users do, but *where* developers and customers find each other. It’s the gravitational field of discovery — when your product becomes the marketplace that defines reach.

[Atlassian](https://www.atlassian.com/?clickid=Ul70Q1W6FxycTBuy-A0C-RwtUkpy6HVWP35xwA0&irgwc=1&ircid=17715&irpid=390418&irmpname=Wildfire%20Systems&irmptype=mediapartner&irshareid=A56&irmpgroupname=%22Non-Tech%22&iraid=2022041&irclkid=Ul70Q1W6FxycTBuy-A0C-RwtUkpy6HVWP35xwA0&gad_source=1&gad_campaignid=22344833019) demonstrates this clearly. Its marketplace now hosts more than **5,000 apps** across **Jira**, **Confluence**, and **Bitbucket**, many built by small vendors that rely entirely on Atlassian’s distribution for revenue. For users, every plugin adds efficiency and customization; for developers, every listing creates dependence.

This two-way pull forms the essence of distribution gravity: users stay because their tools live inside the platform, and developers stay because their customers do. Exiting the ecosystem means losing visibility, adoption, and network access all at once.

That’s the final stage of platform gravity — when a product stops competing in a market and *becomes* the market itself.

## Why does gravity matter more in the AI era?

The AI field evolves faster than any software cycle before it. Each update resets the race, shifting focus from features to momentum. Builders win by reacting before anyone else can adjust.

At that speed, platform gravity grows stronger. Shared frameworks make building easy but also make absorption quick. Everyone uses similar tools; a few direct where the results flow.

Gravity sharpens because control now sits higher in the stack. When infrastructure is open, real power lies with whoever manages data flow and deployment reach. 

## Comparing Gravitational Centers

Let’s compare the current gravitational centers — the labs that control base research and model fuel. Each platform has its own kind of gravity; understanding which one you’re orbiting determines how much freedom you actually have to build.

.gravity-table { width: 100%; border-collapse: collapse; margin: 20px 0; } .gravity-table th, .gravity-table td { border: 2px solid #000; padding: 12px; text-align: left; } .gravity-table th { background-color: #f5f5f5; font-weight: bold; } .gravity-table td:first-child { font-weight: bold; } /\* Mobile scroll wrapper \*/ .table-wrapper { overflow-x: auto; margin: 20px -1.25rem; padding: 0 1.25rem; } @media (min-width: 768px) { .table-wrapper { margin: 20px 0; padding: 0; } }

Platform

Gravity source

Example behavior

Result

OpenAI

Distribution + API network

GPT Store, ChatGPT, Whisper, Sora

Massive user gravity

Anthropic

Trust + institutional alignment

Claude, MCP, Constitutional AI, enterprise focus

Niche but deep gravity

DeepSeek

Efficiency + research openness

Reinforcement-driven pretraining, lightweight architecture

Research gravity

Mistral

Open weights + local inference

Mistral 7B/12B, Mixtral, Mistral Code, European public funding support

Developer gravity

Qwen (Alibaba)

Regional + open enterprise AI

Qwen 2.5 series, Chinese-language dominance

Regional gravity

Meta

Scale + open-weight network

Llama family, PyTorch ecosystem

Ecosystem gravity

Google DeepMind

Integration + infrastructure

Gemini inside Workspace, Cloud tie-in

Infrastructure gravity

‍

These centers define the landscape every builder now operates in. OpenAI dominates through reach; Anthropic wins trust; Mistral and DeepSeek trade size for speed and openness.

## Escaping Gravity (or Learning to Orbit It)

Platforms pull harder each cycle. Escape is about timing. Stay close while it accelerates distribution; move away before the platform defines your product.

The sign is pretty simple: when customers describe you as a “feature of X,” you’re too close. When they describe X as a “channel to you,” you’re in orbit.

### Escaping gravity

Escaping platform gravity is about owning a workflow the labs won’t absorb without changing who they are. Two companies show it: Runway and ElevenLabs.

Runway escaped by owning the creative pipeline. OpenAI’s Sora demos look extraordinary, but the SORA app ships a tighter version — shorter clips and fewer controls. Because platforms optimize for user minutes and safety, they don’t run pro-grade production suites.

What Runway actually owns (some features, for example, that anchor the workflow):

*   Timeline editor with layers and nondestructive revisions
*   Precise masking/rotoscoping and in-frame inpainting/outpainting
*   Keyframe control for motion, effects, and camera moves
*   Text/image/video-to-video generation is wired into the editor
*   Review links, asset management, and exports for studio delivery

Even if Sora or Veo renders sharper frames, teams stay in Runway to do the real work.

ElevenLabs escaped the same way in voice. Labs can ship solid TTS. ElevenLabs owns identity: stable voices and multilingual cloning with creator tools and publishing. Swapping the underlying model doesn’t replace the toolchain creators rely on.

Escape comes from owning the workflow people use every day. Models change weekly; workflows stick. Platforms will keep chasing distribution and safety, but real gains show up in products that run the actual work — the recent [Gamma Series B of 68 Mil USD](https://gamma.app/insights/how-we-built-a-usd100m-business-differently) clearly demonstrates this.

Gamma replaces the whole presentation workflow with an AI-native editor. And as LLMs move toward commodity status — much like different types of databases that teams pick for price, scale, or convenience — the value shifts to the workflow on top. Gamma leans into that shift and escapes gravity by owning the full creation pipeline.

### Learning to orbit

Learning to orbit is a different path from escaping gravity. Some companies don’t turn themselves into AI products because the economics simply don’t support it. They already own their category. They have loyal users, stable revenue, and workflows that don’t benefit from ripping out the foundation and rebuilding around a model.

So they pick a smarter route: they orbit the platform that gives them the largest lift with the smallest disruption.

Look at **Canva, Figma, and Spotify**. Each one tested AI pilots. Each shipped small features. But none rebuilt their entire product around a model. Their teams move fast already; rewriting everything to match the pace of frontier models would slow them down.

So they take the clean option by letting [OpenAI become the entry point](https://openai.com/index/introducing-apps-in-chatgpt/), and they become the experience behind it.

Orbiting works when a company decides to sit close to a platform’s gravitational pull without losing its own identity. The platform brings distribution. The product brings depth.

Strong orbiters do a few things well:

*   They build a stable API surface that fits naturally into ChatGPT or Gemini
*   They design workflows that feel native inside the platform
*   They focus on predictable, reliable UX rather than chasing every model update
*   They keep their core product intact while letting the foundational App or AI search engine handle the funnel

Orbiting trades ownership of the channel for ownership of the workflow.

OpenAI already has the core ingredients of a productivity suite: reasoning, summarization, planning, voice, meetings, images, and code. What it lacks is the specialized tools that users rely on every day. That’s where orbiters come in.

A handful of companies are building products that fit perfectly into the surface area of ChatGPT. Even fewer have reshaped their entire product around these foundational providers.

Notion, for example, [was rebuilt to include all new Agentic AI features](https://openai.com/index/notion/) by OpenAI. If OpenAI ever decides to ship a real Workspace Suite, these orbiters are the ones with a real chance of being acquired.

AI platforms are centralizing fast, but innovation still happens at the edges. The teams that survive are shaping new ecosystems.

If you’re building tools that thrive in constraint, extend ecosystems, or reimagine the middle layer between model and user, I’d love to connect.

You can reach out to me via [seedtoscale@accel.com](mailto:seedtoscale@accel.com)

‍