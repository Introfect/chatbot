---
name: "Maintaining Productivity as Engineering Teams Scale"
slug: "maintaining-productivity-as-engineering-teams-scale"
domain: "general"
function: "people"
author: "vasan-subramanian"
featured: false
clap-count: 104
read-time: "11 Mins"
created-on: "2023-04-13T03:47:24.000Z"
---

Often, when software engineering teams grow beyond a point, you find that productivity (defined as the amount of work produced per person) dips. Any feature addition seems to take forever. As you ponder what went wrong, you find solace in this famous quote:

> *“Adding manpower to a late software project makes it later.” — Frederick Brooks in The Mythical Man-Month.*

So, are you doomed? Is it a waste to even try and add people to an engineering team?

The answer was an emphatic *no*, when we asked [STS Prasad](https://twitter.com/stsprasad?lang=en), SVP of Engineering at [**Freshworks**](http://www.freshworks.com/), [Sourav Sachin](https://www.linkedin.com/in/souravsachin/), VP of Engineering at [**BrowserStack**](http://www.browserstack.com/) and [Nakul Aggarwal](https://www.linkedin.com/in/nakulaggarwal/), CTO and co-founder of BrowserStack. They believe that it is indeed possible to accelerate growth and to increase velocity in proportion (or almost in proportion) to the increase in team size. And that’s how they have built two of India’s most successful tech startups.

At a *#LearnAtAccel* event hosted at the BrowserStack office in Mumbai, they shared their experiences in scaling engineering teams. A clutch of other startup engineering heads, eager to learn from the stalwarts, listened to them and asked them hard questions. And we got interesting answers.

The first thing that struck me when I started the proceedings was the camaraderie that quickly developed among the engineers. They quickly got comfortable with one other, something that I’d thought can never happen with techies. A quick introduction of each of them, meant to be less than a minute each, went on for five to six minutes at times! Who’d expect techies to talk for this long?

One of the things I’d asked them to talk about during their introduction was the problems that were plaguing them. These were their top three concerns:

1.  Hiring
2.  Hiring
3.  Hiring

Not at all surprising. But what struck me more was the fact that there were no issues even remotely related to technology. People highlighted annual reviews, processes, team structure etc. But none of the usual SQL vs. NoSQL, Node vs. Go, or AWS vs. GCP. Even in the entire five hours of intense interaction after the introductions, not a single tech issue came up.

Yet, even for a techie like me, it was a very engrossing discussion. So, I tried to capture all my learnings from the session in this post. It contains mostly the wisdom of the speakers but it also includes a few thoughts of my own and some from the participants.

### The Power of 6

Scaling engineering teams is all about maintaining the startup mode of working where people collaborate, communicate, innovate at a fast pace. But you also do *whatever it takes*. It is this part that you need to temper down as you grow — you have to start doing things the right way as well, and many a time it may be contrary to the *whatever it takes* philosophy.

It’s useful to think of the team size in terms of the “Power of 6.” Software teams grow through three phases:

*   Early stage — less than 6 people: Teams do *whatever it takes*, quick and dirty works.
*   Initial growth — up to 36 people: You still fit into one office and many of the early stage practices may still work. But this is the phase where you have to keep a watchful eye on what’s happening and prepare for the next phase.
*   High growth — beyond 36: Here is when you need to put structure and processes into place and become deliberate about how you organize things. Here’s where you stop saying “This is how we do things, it has worked in the past.” Instead, you start to think a lot about how you do things and justify them. Because every inefficiency gets multiplied by 36 or more.

![Engineering Teams](https://uploads-ssl.webflow.com/6410c4927a4ae326761f2b26/641100406d94710c44165d0c_606cae0c4e05dc732e5b0a3d_5f243c991dc9ceb65d24e038_1*nV5n3bDL8cHu7v57vi1Kag.jpeg)

### Challenges of the High Growth phase

When a team gets into the High Growth phase, you’ll encounter many challenges which did not exist before.

#### Technical Debt

You start realizing that there is a lot of code that’s out there produced by *doing whatever it takes* in the past. You will find lack of unit tests, you will find scale issues and you will find bad design decisions bogging you down. You may even feel the urge to rewrite the entire product.

But you will also find resistance from the business folks, they will not see value in the rewrite or even small refactoring projects.

Successfully dealing with tech debt starts with a trusted partnership between business and engineering. You must show the value that you are adding, which is typically the increase in velocity in the future, and/or increase in flexibility. Since engineers tend to over-design, justifying the changes in terms of hard numbers is a good thing. This ensures that the refactoring does indeed add value to the business.

The decision regarding timing and approach to each piece of refactoring also has to be made as a combined one with business. Sometimes you can take it up as part of a major revamp of an existing feature, sometimes you can make it a pure tech story in your backlog. Whichever approach you take, it is best to break the product into small enough pieces so that teams can take full ownership of each piece or module.

A wise friend of mine often used to ask, “How do you eat a hippopotamus?” Looking at our bewildered faces, he’d reply, “Piece by piece.” Nothing could be truer in dealing with tech debt. Never ever take up a rewrite of the entire product at once, instead adopt an incremental approach. The complete rewrite approach typically comes with overly optimistic estimates. The risk and effort in re-testing the entire product is also often overlooked.

There is another kind of debt that you will need to deal with: **product debt**. This is about bad *feature* decisions as opposed to bad design or code. It happens sometimes due to eagerness to please a few early customers and other times due to an incomplete understanding of user needs. Hard calls have to be made from time to time to *remove* features, and thus large chunks of code which are often an impediment when you think of infrastructural changes or refactoring.

Every extra feature comes with extra bugs and extra maintenance. Take out those features which are not adding enough business value to justify the cost of bug fixes and maintenance.

![Engineering Teams](https://uploads-ssl.webflow.com/6410c4927a4ae326761f2b26/641100406d9471c78d165d0d_606cae0c4e05dc24795b0a40_5f243c9977d6047e266b3d4b_1*WzVQDjY5jGEqZZpMSngAMQ.jpeg)

#### Distractions for Engineers

You perhaps don’t see this directly, but you find that your engineers are spending less than half their time in what they used to do: build features. Now, they are spending a lot of time dealing with production issues, customer issues and sudden high-priority requirements.

The right solution to the first two issues is to hire or strengthen the operations team and customer support, so that these are offloaded from the developers. But dealing with interruptions for new unplanned work is not that easy. There are two kinds of ad-hoc work:

1.  Production bugs
2.  Urgent feature requests

For most people, “bug” is a nasty word. For engineers, it’s also a matter of pride, so a bug must be fixed immediately. But in reality, not all bugs need an immediate fix. Objectively evaluating the impact, the probability of occurrence and the percentage of customers affected is a must. Only when fully justified should a bug fix be taken mid-sprint.

But there is still that issue of how to budget for these bugs. One option is to have a separate team (maybe with rotating members) dedicated to this. But this doesn’t scale, because you can’t expect the members of this team to be an expert or even familiar with all parts of the code. You will find that this “maintenance” team often consults the original owners of the code, defeating the original purpose of removing distractions. If you expect the maintenance team to do just the first level analysis, then, what you are really missing in your organization is an L2 support team. They are the ones who should be doing the first level analysis, not your development team.

It is best to leave the actual maintenance to the original team that owns the component and budget for it within the sprint itself. It will not only build ownership but also increase efficiency. Over time, you will know how much to buffer your sprints to account for these bug fixes. It will also make your engineers think how to improve the quality of code so that bugs in production are minimized. It will not be someone else’s problem.

But it still does not avoid the context switch. An engineer, who is thinking all day about a product feature is still distracted by a bug fix request. One way to deal with this is to have allotted hours (say 5–6 pm every day) which are time-boxed periods for such hot-fixes. This also has the advantage of limiting the hours spent on these, automatically creating a back-pressure to prioritize the fixes.

For urgent new features, it’s a matter of planning and also nurturing a trusting relationship with the business team. If you are following scrum, this is automatic. Feature requests always come into the backlog, they are discussed and taken up as part of sprint planning and never in the middle of a sprint. This has the following advantages:

1.  There is a nice compromise between agility and stability — engineers are left alone for an entire sprint, yet business can change priorities completely (between sprints).
2.  The backlog is always reviewed as a whole — there is no recency bias, and things don’t become priority just because a feature was thought up just now. They are compared to everything else on the list, and a *relative* priority emerges cleanly.

You may also consider a role that can smoothen the entire process, one of a Technical Program Manager. They can offload repetitive tasks from the Head of Engineering and also ease coordination, understanding and trust between Engineering and other close functions such as Customer Success, Operations and other stakeholders.

#### Change for the Old Hands

There is a feeling of loss of control for the early engineers as the team grows. This is usually because of new hires, peers, who question them or do things differently. Added to this is the fact that the engineers have lesser say in shaping features and their prioritization, due to the introduction of a formal Product Management function.

It’s imperative that you invest in your initial set of people and not take them for granted as the team grows. Because of the depth of context and knowledge acquired in the early days, their presence is much more valuable than you probably think. Their sense of loss of control is natural — you should hear them out and spend time with them, talk to them and align them to the new realities, one of which is that shaping features is not their job any longer.

This is not to say that they should have no say or visibility. Transparency of the product roadmap, how each feature affects business and having an empathy for the end user are all important, not just to the old hands but to everyone. The best way to kill productivity is to just tell the engineers what to do without telling them why. As for the old hands, do get their input for core product changes.

In the end, it’s all about communication. Just that a larger team needs more of it. Things like customer context, business context and user context must accompany the roadmap. All hands meetings and team meetings may seem a waste at first, but when you look at each individual engineer’s perspective, you’ll see why they are needed.

![Engineering Teams](https://uploads-ssl.webflow.com/6410c4927a4ae326761f2b26/641100406d947130e4165d0b_606cae0c4e05dc7eeb5b0a54_5f243c9a76911e1b3ae493ce_1*9fuRB_3BUFOEwGVeuvMd5w.jpeg)

### Separate the Managers from the Techies

You will find that some of your “good” people are given the additional responsibility of having to manage others to get work done. Maybe they do a decent job of it, but you’ll also find that you are losing out by not utilizing their technical abilities to the fullest.

It’s tempting to think that if a person is good at one thing, he or she will be good at other things. Read that as programming and managing. Do not make this mistake. Identify which of your senior folks are ready for leading teams (and want to do it) and which of them want to bury their noses deeper into code. If you don’t identify the two kinds of people, you’ll not only be doing a disservice to your product but you’ll also be destroying a few careers.

To make the distinction, a Team Lead is responsible for managing the team, leadership and delivery of the product (or subsystem). A Tech Lead is responsible for ensuring things are *done right*. It’s useful to think of these in terms of [RASCI](https://managementmania.com/en/rasci-responsibility-matrix) matrix, or [variants](https://en.wikipedia.org/wiki/Responsibility_assignment_matrix) of it.

An Architect is an evolved version of a Tech Lead, but you shouldn’t let an architect live in an ivory tower. An architect needs to have a business sense and should contribute actively to the product. Apart from making technology and architecture decisions, he or she also prioritizes, looks at trade-offs and estimates. They should not operate as consultants and deliver just documents, they need to deliver code and features as well.

### Communication Breakdown

As the team grows, a big challenge is maintaining the level of information exchange that you had in early stages. Earlier, everyone knew everything, but not anymore. What could be transmitted over a conversation in the corridor or over a drink in the evening is just no longer possible because of the sheer size of the team.

One thing to do is avoid distributed teams. It not only overloads your communication requirements, it also leads to trust issues between locations. Of course, in rare cases (I have been part of one, yet I believe it is rare) multi-location teams have indeed succeeded. But this requires a deep level of understanding and trust, or “connect” between the two location heads, as well as clear partitioning of responsibilities.

The other thing to do is invest in documentation. Oh, I know, I know, you are saying “But Vasan, the Agile Manifesto says to prefer working software over documentation. We are not agile if we spend time in documentation.”

OK, I like to distinguish between two types of documentation (you could call them two ends of a spectrum too, if you wish):

1.  Transient, instructional: these are documents that tell others what to do. Once done, they can be thrown away.
2.  Permanent, referential: these are fundamental reference documents and rarely change. If they do change, you don’t mind updating these documents.

Do invest in the second kind of documentation. Always write down all the things that you don’t want to forget. This includes choices considered and why a particular decision was made (so that you don’t rack your brain every time you are confronted with the same choices again). It also includes things like flow-charts and state diagrams that are hard to glean from the working product itself. These are something that you can give a new employee to read during their first week at work. These are things that serve as a useful reference, that you go back to often.

As for the first kind, white-boarding and taking a picture at the end of it with your phone works just great.

### Conclusion

At first glance, the Mythical Man-Month stares at us and tells us that it’s impossible to make Velocity a linear function of the team size. But people have done it. In summary, here are the things you could do to make it happen:

*   Deal with Technical Debt: recognize it, spend time fixing it, but justify it.
*   Avoid distractions: allow engineers to do what they do best, get someone else to deal with other stuff.
*   Protect old hands: spend time with your senior engineers, yet make them participate. They are more valuable than you think.
*   Recognize different skills: create a managerial path and a technical path for people, identify your senior folks as one or the other.
*   Communicate often: the bigger the team size, the more you need it. Invest in structured communication and good, appropriate documentation.