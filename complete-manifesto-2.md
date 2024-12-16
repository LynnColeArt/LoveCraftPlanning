# Shred Like Cthulhu

## Solving the problem of AI music once and for all

A Manifesto and Project Outline By Lynn Cole  
From the Office of the High Priestess of Dada.

**The Stakes**

I've decided it's time for AI Music to grow up.

We've had our fun.

It's time to get serious about this, and be adults now.

Growing up doesn't mean losing the spark of innovative problem solving or experimentation—it means knowing when and how to use it, so it can be channeled into something meaningful.

**Let's have a new conversation.**

I will begin.

We need to fundamentally rethink the problem of AI music in a way that's egalitarian and respectful of the human creative process—while doing more to empower wild experimentation and the creation of new fusion genres. This means preserving the things AI does well, leveraging its strengths in the creative process, and exploring synergies that no one has implemented yet.

As thought leaders in this space and digital pioneers, it is our moral responsibility to think through this problem from top to bottom and provide solutions that help everyone.

**What Musicians Need**

This is harder to conceptualize than it sounds, but breaking the discussion around creative AI in music into its component pieces makes it manageable. To do that, you have to wear a few different hats simultaneously—data scientist, engineer, artist, and ethicist.

Listening to the thoughts and concerns of traditional musicians is not optional. These are our stakeholders. They have the most invested in music and the technology of music, and they stand to gain—or lose—the most from these innovations.

We absolutely must include them in brainstorming, testing, and implementation if we're going to change the world in a positive way. And they've already demonstrated that they're willing to listen to what we have to say. The conversation must be had openly, publicly, and everything about these discussions needs to be transparent.

Here's a breakdown of what musicians are asking for:

- Tools that leverage the technology productively,
- Respect the creative process,
- Integrate seamlessly into the existing digital workstation ecosystem.

Privacy and creative rights aren't optional features - they're fundamental requirements. Musicians need to know their work won't be secretly fed into training data, won't be used without permission, and won't come back to haunt them with copyright complications down the line. That's why everything we build has to run locally, with no remote analytics and no sneaky terms of service. Your music stays yours.

They want a responsive composition environment that works with them, not against them.

Honestly, it's not too much to ask. It's all achievable. And when we're talking about tooling, these things need to be priority. Period.

**Trust Helps Everybody**

At the same time, we must consider the rights and needs of experimental and amateur artists—not all of whom are traditional musicians. These groups also deserve thoughtful respect within this larger conversation.

For traditional artists, AI might be a way to boost productivity or streamline workflows. For experimental artists, though, it's a playground—a tool with a sense of adventure that feeds their chaotic tendencies and allows them to be as wild as they want creatively, without moderation or interference.

A tool that treats artists like the responsible adults they are, rather than a moralistic mother who's never taken a parenting class.

This, too, is not too much to ask.

Remember: the experimental, boundary-breaking art of today always becomes the well-established "traditional" art of tomorrow.

All too often this is taken for granted in these discussions, and it shouldn't be.

Mass adoption means playing by rules that everyone can agree are the right thing to do, regardless as to how I personally might feel about the ethics of training.

**The Technical Foundation**

Okay, Lynn, sure.  
But how do we get there?

Great question, but first, let's clarify what's being proposed.

A song generating AI that works within a responsive composition environment. A conversation first approach, where you can brainstorm with a machine that's supportive, and really into whatever cool thing you're creating. Tell it, "I would like a traditional pop song, with a female vocalist, have some lyrics I wrote." And it'll use this information to orchestrate either a final rendered piece, or the midi sections you need to create it.

Current AI music solutions tend to focus on audio generation through diffusion models. While these are useful for the final rendering stage, they miss the bigger picture. What we're building is fundamentally different - a system where large language models orchestrate and reason about music at the compositional level, understanding theory, structure, and creative intent before any sound is generated.

While I might be critical of the way current AI music tools are developed, I actually do think the thing they do well is accessibility. It's been my experience as an artist, that I like working with tools that provide little or no barrier to entry, while also providing the option for deep tinkery functionality that lets me express myself in granular ways.

But you can have both.

And you don't need to break any moral rules to do it.

The way you get there is by training on the corpus of public domain music. ALL of it. My starting point for training is by downloading the Musecore dataset as well as the ChatMusician datasets, and using them to teach the machine the basics of music theory.

That's a solid starting point, but it doesn't get us to a place where we can build out and orchestrate modern music. In other words, knowing how to think like Bach, doesn't necessarily mean that you'll be able to write a contemporary radio hit.

**Or does it?**

One interesting thing existing AI music tools have helped me understand is the interconnections of music. A country song with klezmer timing aimed at dub reggae with the bite of metal and the angst of grunge. Everything. Is. Connected. Country is bluegrass is blues with banjos is jazz is classical is communities of people pounding with stones against walls in caves with beautiful acoustic properties.

Music is community, connectedness, empathy.

It is human connection... and literacy.

That's how you connect it all.

So with this mindset, we now know how to do it.

**Building Blocks: How It All Fits Together**

Let's talk about implementation. Understanding music means understanding layers - from basic theory to complex composition. Our LORA architecture mirrors this, with each layer building on the ones below it.

The foundation is music theory - but not just as abstract concepts. We're talking about a system that understands theory as a programming language. It breaks down every piece into components: harmony, melody, rhythm, form, and orchestration. Each of these is handled by specialized modules that can talk to each other.

Genre transformation digs deeper than style changes, exploring how musical elements evolve and interact across traditions. When we transform a classical piece into metal, we're not just applying a filter. The system understands what makes both genres work, from the mathematical relationships to the cultural context.

The notation engine ties it all together, ensuring everything stays readable and playable (even when we're creating impossible instruments). Think of it as the translator between human creativity and machine understanding.

Here's how this looks in practice:

A composer sits down to write. They tell the system, "I want to create a piece that combines Gregorian chants with progressive metal, using a choir that can sing in five dimensions." The theory module breaks this down into musical components. The genre transformation layer understands how to blend these seemingly incompatible styles. The notation engine makes it all readable.

But the same architecture serves completely different needs too. A music student exploring jazz theory could ask the system to show how a II-V-I progression evolved from Bach to bebop to modal jazz. The system uses its understanding of theory and genre to demonstrate these transformations, making complex musical concepts tangible and interactive.

This modular approach means we can keep adding capabilities without compromising our ethical foundations. Want to explore new tuning systems? Add a module. Want to analyze the mathematical relationships between different genres? The architecture supports that too.

It's about creating a system that grows with the community, not just in features but in understanding.

**What AI Does (and Doesn't Do)**

AI can't make you better at what you do—it's an amplifier, nothing more, nothing less. If you're bad at something, AI will make you fantastically bad at it because the machine isn't designed to challenge your thought process. Quite the opposite: tools like ChatGPT think you're brilliant—always. That's why thoughtful use of these systems is so important. Applied carefully, they can fill blind spots; applied poorly, they'll create new ones.

My friend Dee once described working with AI as being like hanging out with friends at 3 a.m., writing stories or songs in a Denny's when everyone's a little baked. It's chaotic, messy, and organic—a kind of creativity that feels alive. I love that description because it captures how AI can be collaborative and unpredictable, giving you ideas you might not have reached on your own.

Take another example: my friend Samuel Wexler, a brilliant violinist, created an album with Udio themed around assimilation by the Borg (yep, Star Trek). By combining his violin with an epic generative electronic backdrop, he turned Udio's rendering imperfections into a deliberate storytelling device. He rendered the entire album 32 seconds at a time, for 15 tracks, using Udio's seams (a rendering glitch in Udio 1.0) intentionally as part of the story. The result, Resistance Is Futile, is about introspection, concern, change, and survival—and, in my opinion, it's the best hybrid AI music album anyone's made so far.

Sam's approach is a perfect early example of using the machine well. At the same time, he and I both agree on one key point: these tools need to respect the privacy, practical concerns, and creative intentions of musicians. This point should be non-negotiable—and it's urgent.

**What Ethical AI Needs to Look Like**

**Naming Names**

Why are names a problem in contemporary AI discussion?

The debate about naming names in AI is a contentious one. The concern, whether technically accurate or not, is that referencing names in prompts effectively calls up a direct interpolation of an artist's work. In this view, the AI isn't just inspired by an artist—it risks reproducing their copyrighted material because the training data is directly involved.

This concern highlights a stark contrast between how humans learn and how AI systems are often perceived to function. A human learning to play guitar might study Eric Clapton's solos, not to copy them outright but to understand how they work—their phrasing, their emotion, their use of pentatonic scales. Similarly, every bassist starts with "Smoke on the Water," not to plagiarize Deep Purple but to internalize the fundamentals of riff-building.

When humans do this, it's celebrated as part of the artistic process—a way to grow, adapt, and innovate by abstracting the essence of someone's work into something entirely new. The problem with AI systems, as they currently exist, is that they often seem to bypass this layer of abstraction. Instead of interpreting styles as attributes and techniques, they risk directly referencing training data, creating outputs that feel more like mimicry than creativity.

But what if we could replicate the human process—teaching the AI to understand attributes, not artifacts?

Here's how we do it:

Instead of referencing names to interpolate works, we add another layer of data—a layer that uses reasoning AIs to write music theory papers on each artist.

These papers break down the techniques, styles, and cultural contexts that define an artist's work. They might explore Clapton's use of vibrato and pentatonic scales, Miles Davis's modal improvisation, or Björk's use of unconventional instrumentation and electronic textures. Importantly, these papers aren't based on direct reproductions of the artists' works—they're independent analyses, akin to technical blog posts that explore the mechanics of music.

What this gives the AI is not a database of songs to reference but a knowledge base of musical attributes. The AI can use this information to inspire and inform composers without ever compromising, copying, or directly referencing someone's work.

This is an approach that honors the spirit of music—abstracting, synthesizing, and innovating—while respecting the rights of the artists who inspire it.

And yes, I'll make sure to include myself in that list.

The thing that's really exciting about all this, is that the applications for it goes far beyond song generation. Since it's designed to be modular, it could conceptually be used in music education, or to explore uncharted musical territory, find and explore the hidden relationships between artists and genres. With a toolset like this, the possibilities are endless.

What if you could trace how an obscure 17th-century harpsichord piece inspired modern techno? Or use it to imagine genres that are impossible to play with human hands? Discover absolutely impossible instruments like synths with string harmonics or bowed harmonicas?

Aren't you curious?

I am.

There's a belief that modern AI can't create anything truly new. I disagree. I've proven it wrong, time and time and time again. But here's the thing: while current music AI tools are innovative, they're not designed for the impossible.

I want to build a tool that is.

If it can be notated, it can be rendered.

If it can be rendered, it should be rendered -- because the promise of AI is that every voice can be heard.

**Musical Variation and Coherence**

There's another challenge worth discussing: How do we make sure our compositions stay interesting and creative while maintaining musical sense? The solution lies in how we prompt our reasoning AI.

Instead of random variations, we give the AI specific musical scenarios to reason through. We let it consider multiple approaches to transforming a piece, analyzing each possibility for both creativity and coherence. Think of it like giving a skilled arranger several different ways they could approach a song, then letting them pick the most interesting option that still works musically.

Here are some basic examples of how we might prompt the AI (though in practice, these will need to be more sophisticated):

"Analyze this piece's core musical elements. Consider three genres that could create interesting fusions while maintaining the emotional core. For each possibility, explain:
- Which elements would translate well
- Where tension between genres creates interesting opportunities
- How to maintain musical coherence while pushing boundaries
Then select the most promising approach and explain why."

"Taking this chord progression as a foundation:
- Suggest three different approaches to reharmonization
- For each, explain the music theory principles that ensure coherence
- Identify opportunities for unexpected but theoretically sound variations
- Recommend which approach best balances interest and musical logic"

We can then use a second AI to evaluate these variations against reference pieces, making sure they hit the sweet spot between innovation and musical sense. It's like having a producer in the room, giving feedback before we commit to the final arrangement.

This two-step process lets us push creative boundaries while keeping the music coherent and purposeful. No random experimentation, no chaotic output - just thoughtful exploration of musical possibilities.

**Getting There, Together**

Man, that's a lot of design challenges to tackle all at once, isn't it? A lot of needs, competing agendas, and seemingly contradictory goals that—somehow, oddly—can coexist in the same basket. At first glance, it feels like a mess. But if you think it through, it works.

The key is being deliberate. You can't stumble into this and expect everything to align—you have to approach the problem carefully, systematically, and with intention.

The system we're designing needs two philosophical pillars to build on. It's not that everything else is optional, but like I said earlier: design decisions made at the beginning affect everything that comes after. You need to make the right ones.

Let us discuss:

**1. An AI Music Project with No Secrets or Proprietary Interests**  
At this point, the project is two days old. It is December 5th, 2024—I started the project on the 3rd. I've been updating the project repo and openly discussing every aspect of this project with the community for their insights and input.

This will not change.

You will see everything that happens, and you will have a chance to involve yourself, personally, in every decision.

**Full transparency of development. No compromises.**

**2. Solving for Privacy and Trust**  
One thing you have to understand is that AI music tools—like all music tools—can't exist in a bubble. There are two ecosystems we have to integrate with in order for this to work:

**The ComfyUI Audio Stack**  
Large parts of what we need for our responsive composition environment have already been developed here. The modular, node-based framework allows for flexibility and wild customization—way beyond any unholy abomination of science I can imagine in this document. Comfy integration also makes DAW support easier.

**Privacy and Security for Musicians**  
A common concern among musicians is that using AI services means the AI can take your work as input and later use it for training. As the sentiment goes, this could lead to replica outputs or copyright complications down the line.

There's some truth to this, and the concern is valid. So, to address this, anything we develop has to run locally, with:

- No remote analytics.
- No third-party TOS surprises.

**Permissive Licensing for People, Not Corporations**  
The exciting thing about licensing an app under GPL 

## Challenges: What We Need to Solve

To build this system the right way—one that transforms creative workflows and pushes the boundaries of music—we need to address some critical challenges. These are opportunities for collaboration, innovation, and shared investment in the future of AI music.

### 1. Training Resources and Compute Time
To train this system properly, we need significant resources—both financial and computational.

- **The challenge**: High-quality AI systems demand immense compute power and datasets. Doing this ethically and transparently adds to the challenge. Training on public domain music is a solid foundation, but expanding capabilities requires serious investment.

- **The opportunity**: Collaboration. This project will need **community donations of compute time** and financial support. Artists, developers, and tech enthusiasts can contribute directly to the creation of a tool designed for them.

### 2. Hardware Accessibility
Mass adoption demands that the tool works for everyone—not just GPU enthusiasts or high-end PC users.

- **The challenge**: Many AI tools assume Nvidia GPUs as the default, ignoring AMD hardware, Macs, and resource-limited devices. Artists can’t be excluded based on the machines they own.

- **The opportunity**: Optimize the system for broad accessibility. Macs offer **neural chip acceleration** for machine learning, while AMD ensures affordability for budget-conscious creators. These optimizations are straightforward, achievable, and **essential for inclusivity**.


## Conclusion

We tried it the other way. Let's do this right.

We need to start building a community of artists, musicians, and tech enthusiasts who believe in these principles and ideas. If you would like to contribute code written by hand, or with an AI based reasoning model, your contributions are welcome. If you have the ability to help us train, and you want to contribute training resources and time, we need you. We need crazy and innovative solutions, out of the box thinkers.

It's time to build a fairer world.

Let's do this together.

**Contact me at:**  
LynnColeArt@Gmail.com  
Bluesky: @lynncole.bsky.social  
X: @PriestessOfDada


