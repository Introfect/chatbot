---
name: "Evaluating Evals: Who will win AI’s reliability race"
slug: "evaluating-evals-who-will-win-ais-reliability-race"
domain: "decoding-ai"
function: "ai"
author: "anagh-prasad"
featured: false
clap-count: 9
read-time: "6 Mins"
created-on: "2024-08-12T09:26:02.000Z"
---

According to IDC, testing and QA account for 20-30% of a typical software team's application lifecycle management costs today. This represents a massive and growing global market of over $100 billion for testing systems, which never seems to stop throwing up new bugs. Remember the flight cancellations caused by the Microsoft outage last month? The fact holds true after over 50 years of progress in modern software development and related development tools, and for systems that are programmed to be exactly predictable. 

Now, as GenAI's inherently non-deterministic component starts permeating software, finding more ‘bugs’ in production isn’t technically surprising. 

Whether it is a leading [airline losing a lawsuit](https://www.bbc.com/travel/article/20240222-air-canada-chatbot-misinformation-what-travellers-should-know) for its chatbot’s overstepping responses or a global [tech giant losing $100B in](https://www.foxbusiness.com/markets/google-loses-96b-value-gemini-fallout-ceo-damage-control) market cap for biased image generations, we have seen how GenAI-based systems can go wrong in multiple, often bizarre ways. 

It is increasingly clear that current software testing practices, which were built to test deterministic software, fall short of shipping reliable AI-based systems. The problem is deep and wide, and the winning prize is massive! 

Given the large and growing addressable developer base, the technical depth of the problem, and the need for a fresh product approach, the space looks ripe for a new winning startup to emerge. As investors in leading and fast-growing software testing companies like Browserstack, Sentry, TestSigma, etc., we have been long-term believers in the business of monetising reliability. In the rest of the article, we will try to unwrap where large opportunities lurk within the GenAI testing space - also called ‘Eval’ in AI parlance.

### What does testing GenAI-based systems entail? 

Following is our view of how the typical generative application development cycle:

![__wf_reserved_inherit](https://uploads-ssl.webflow.com/6410c4927a4ae326761f2b26/66b9d529d55ab98ccc2e62cf_66b9d43ac7fbf741b918889e_flowchart-66b9d42d3f9a1.webp)

The middle layer, Eval, has three critical steps:

1.  Creating an eval dataset: It is arguably the most impactful step in testing but also the most challenging to get right. Since most GenAI-based applications are designed to accept free-form inputs, it's crucial to anticipate actual user behavior and test for all significant, likely, or unlikely scenarios to ensure the system is reliable before it goes into production.
2.  Defining evaluation metrics: What does it mean for an AI application to have a "high-quality" output? It depends on the specific use case. Quality can encompass accuracy, relevance, safety, fairness, completeness, or other qualitative and task-specific attributes. It is different from regular software testing, which typically focuses on whether the output value exactly matches the expected value.
3.  Running the evals: This part includes the platform where all tests run. Due to the high computational intensity of model inference, and the necessity for parallelisation to improve efficiency, testing GenAI-based applications on a large scale requires purpose-built infrastructure.

### What are developers doing today?

Building GenAI based applications is largely at a stage where engineering is grappling to catch up with science. Thus, a universally applicable best practices playbook has yet to emerge. 

The gold standard for testing GenAI software continues to be thorough human evaluation. However, while it excels at inspiring reliability in production, it is fraught with significant challenges: It is time-consuming (slowing down production cycles), difficult to execute (needs domain experts vs general purpose QAs), and often commercially infeasible (comprehensive testing costs can usually exceed dev plus deployment costs several times over). Auto-eval methods (LLMs testing other LLMs) lie on the other end of the spectrum: fast and cheap but largely unreliable. 

![__wf_reserved_inherit](https://uploads-ssl.webflow.com/6410c4927a4ae326761f2b26/66b9d459a9d14ad8552a4582_Graph.svg)

Hence, most teams believe the “right” solution is in the middle. In a sample survey of 30 dev teams (all product-led startups at varied stages) in our network, ~60% reported using some combination of benchmarking/auto-eval and human feedback collection (which, in most cases, is just eyeballing model outputs as of today). Manual testing was undertaken directly by application developers at 80% of the companies. About 15% had asked QAs to participate in testing LLM deployments and a similar portion looped in product managers directly. 

### What will the category winners look like?

Unsurprisingly, ‘Eval products’ have quickly become a global hotbed of early-stage startup activity. The rapid growth of open-source frameworks like Langsmith, Ragas, and Langfuse points to increasing developer awareness for the category. VC activity has been quick to follow, with at least 20 venture-funded startups incorporated in the last few months (BrainTrust, Vellum, Patronus, Athina, etc., to name a few). Simultaneously, as the commercial opportunity of testing GenAI applications becomes increasingly clear, erstwhile ML Observability companies like Arize, Fiddler, and Gantry have launched impressive product lines for LLMs. 

We anticipate the competitive intensity in the LLM Eval category to only shoot up from here on. While it is hard to predict the precise winning strategy early on for both founders and investors, we predict that the most widely used LLM Eval products of the future will win on the following capabilities: 

1.  Intuitive feedback collectors: Neat interfaces for collecting multi-modal and multi-step feedback from human testers.
2.  Dynamic test data updates: Ability to auto-update testing datasets from observing good and bad examples in production. 
3.  Customisable metrics selection: Unopinionated and flexible frameworks that let individual users devise their own eval metrics (relevance, accuracy, safety, etc).
4.  Model upgrades: We believe that model updation and evaluations are closely linked (e.g., via RLHF), and the best platforms will combine the two to create continuously improving AI systems. 

We believe that advances in the eval product ecosystem are not just a byproduct of the widespread growth of GenAI applications. They rather carry a bidirectional relationship - because unless the median developer has a reliable toolset to test and monitor their applications, most pilots will struggle to convert to production. For founders looking to monetise the Eval opportunity, the timing is here and now

Beyond the product opportunity, there is a vast, untapped market for services and productized services aimed at evaluating LLM-based applications. This potential is underscored by the rapid rise of platforms like Scale. A key difference between such new services vendors in Eval and traditional QA vendors will be the organization structure. While a regular QA engineer can be trained from scratch to test software, effectively testing generative applications often needs domain experts such as lawyers for legal AI, and doctors for health AI. That important organization structure difference creates a real advantage for new, AI-native services vendors over incumbent IT Services giants. 

At Accel in India, we strive to grasp the immense opportunities in Evals across both products and services. If you are a builder or operator in this space and have insights to share, we would love to hear from you.