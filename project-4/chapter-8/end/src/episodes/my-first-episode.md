---
title: My first episode
date: '2019-01-01'
audioUrl: '/assets/media/test-audio.mp3'
---

## A little description of the episode
This is a description

{% include 'includes/player.html' %}


* Our Guest: [Salma Alam-Naylor](https://whitep4nth3r.com/)
* What she'd like for you to see: [Unbreak.tech](https://unbreak.tech/)
* Her JAMstack Jams: All the amazing rendering options!
* Her musical Jam: [Move On by Emily Vaughn Grant](https://open.spotify.com/track/5jnoK2o5jY46qhPR30RepX) (pay special attention at 1:47 in the track for the double tracked bass!)

## Transcript
### Bryan Robinson  0:14  
Hello Hello everyone. Welcome to another JAM PACKED Jamstack episode. This is That's My Jamstack the podcast where we ask the best question since sliced bread. What is your jam in the Jamstack? I'm your host Bryan Robinson and this week, we have a very special guest. I'm pleased to introduce the winner of the Jamstack community creator award from Jamstack Conf 2021 Salma Alam-Naylor. Salma helps developers build stuff, learn things and love what they do. She does that via her Twitch streams, YouTube channel and blog. One quick update for the episode, we recorded this prior to Salma joining the Netlify team. So while we mentioned Contentful, in various parts of the episode, Sam is now on the DX team at Netlify.

### Bryan Robinson  1:04  
Alright, Salma, well, thanks for joining us on the show today.

### Salma Alam-Naylor  1:06  
Thank you for having me. It's a pleasure to be here.

### Bryan Robinson  1:08  
Awesome. So tell us a little bit about yourself. What do you do for work? What do you do for fun,

### Salma Alam-Naylor  1:13  
I am currently a developer advocate for Contentful. I've also got like kind of other stuff that you do. So you might know me on the internet as white Panther. And I help developers build stuff, learn things and love what they do. I write educational blog posts about web development. I do a lot of live streaming on Twitch, I make YouTube content. And I'm an all round Jamstack enthusiast To be honest, for fun, I mean, I kind of do that for fun as well. But if you want to know about non web dev stuff, I actually love interior design. And I'm moving in the next like two months. So hopefully, when people hear this, they would have actually finally moved house. So I can't wait to get my hand stuck in to that little project. I also like to play cerebral puzzle games with my husband on on a computer, most recently, a game called Super liminal, which is all about like perspective and maths and stuff. It's very good.

### Bryan Robinson  2:19  
I'm gonna jump in real fast. I have a six year old and we were playing super limited together. Nothing about it. I was like, this is super fun. And like we were having good time. He that was really cool. And then it gets creepy. I didn't expect they get super creepy. And he's like, I don't want to play this game anymore. Daddy. We never have to play it again. You're fine.

### Salma Alam-Naylor  2:38  
Yeah, it was a good game. It's a good game. I remember this one bit that when you get on like a roof, and there's the moon. And we were like on the roof thinking this you have to we have to get above the roof because of the weird glitch thing when you turn the light on and off. But it wasn't it was an Easter egg. It wasn't a thing. It was fun. And I'm also, you know, my background is in music. I did a music degree. I was a music teacher. I was a musician. So I still try to play music for fun with my family. And I do want to get back into making music. Actually, I missed that a lot. But so when I move into my new house, I'll have a proper studio purposely for the music. So I think I'm looking forward to that a lot.

### Bryan Robinson  3:21  
That's amazing. So what's your instrument of choice or musical talent of choice, I suppose.

### Salma Alam-Naylor  3:27  
So when I was growing up, and when I was a teacher, my main instruments were piano and flute, but and singing, but I also taught kids how to play in rock bands for a few years. So I was a bass player. I don't really do much bass now. And I did some guitar and played some drums and stuff. But making music now I really like making electronic music mainly. I was also a musical comedian for a few years. Interesting. touring the UK, singing weirdly satirical British political songs. We'd get cancelled now so you can't hear any of it.

### Bryan Robinson  4:14  
Out of curiosity. Is there any comedy in Britain? That's not satirical political comedy? I feel like everything kind of falls into it.

### Salma Alam-Naylor  4:23  
Yeah, it's pretty much there's a lot to satirize in the British political system. But I guess that's for another podcast.

### Bryan Robinson  4:31  
Yeah, sure. Awesome. Yeah. Let's let's maybe not talk about about the Jamstack. He's, he said that you're a Jamstack enthusiast. So what was your entry point into this ecosystem philosophy, what have

### Salma Alam-Naylor  4:45  
you it was actually with Jekyll, the first static site generator many, many years ago, and that was the only one that existed you know, like around 2015 2016 and I had no idea what it was doing. But I was experimenting, I had really no idea that it was part of the Jamstack. At the time, I was just building a website, I had no idea that it was a static website, and really what that meant, but I was building something with liquid templates that compiled into a website. And I was hosting it on GitLab Pages at the time, not GitHub Pages. I was because I used to get lab for work. And so I kind of naturally gravitated towards GitLab at that time. But I guess the ecosystem sucked me in. I really don't know how I went from building my first Jekyll site to where I am now. I have no idea how, how this has happened, or what made it happen. But clearly, the Jamstack has, has a good thing going right. Like, it's fantastic.

### Bryan Robinson  5:51  
So what are you doing right before you started playing with Jekyll, you were at some sort of company doing tech stuff he's mentioned you are you are using GitLab. So what was that like?

### Salma Alam-Naylor  5:59  
So I did a variety of different things. Before I ended up here. I was working for some startups, I was working for a global e commerce company that was using like Java, whether bespoke kind of E commerce system with JSP front ends. I was also before that I was building a new e commerce platform in a startup that was JavaScript based what we're even using PHP, we're using PHP with JavaScript front end. But it was a it was a plain JavaScript front end, it wasn't statically generated, it wasn't using a framework or anything like that. After the global e commerce company, I was actually working for another startup building a React Native app. So like my career actually had nothing to do with the Jamstack. It was all my side projects. Until my last job, I was working at an agency, product agency. And we built quite a lot of things in the team. And actually we started gravitating towards next J S for these quick. They were initially proofs of concept, because next JS was pretty young at the time. But it ended up that next JS was a really scalable front end with a lot of capabilities. So we normally have like a dotnet back end and an extra as front end kind of thing with the API layer in the middle. And that was really my intro into the enterprise levels, scalable, robust, we can build whatever we want with the Jamstack kind of thing.

### Bryan Robinson  7:38  
Alright, so let's fast forward a little bit. That was your last thing, right? How today, are you using the Jamstack philosophies professionally, I mean, obviously, Contentful is pretty, pretty big in that world. But also personally with both your educational stuff and anything else you're doing on the side.

### Salma Alam-Naylor  7:52  
So one of the biggest philosophies that I like to promote the Jamstack is that just do it, just build something and get it live, just build it learn some stuff while you do it, and have a good time. Like, I can try things out without having to over commit to anything on the Jamstack I if I've got an idea for a website, a lot of the time I will get the idea or buy the domain, I will go on my Twitch stream for three hours. And I will build it and release it in that three hours. And that is the joy of the Jamstack. 

### Salma Alam-Naylor  8:05  
And what I love about that as well as it's so accessible to developers, because you don't have to over commit or pay for anything at that stage of IDEA inception. And so it's so accessible, and it's so in reach for so many people, for example, dot take dotnet I don't want to like hate on dotnet. It's great. It's a fantastic enterprise solution for enterprise products. But as a developer, as a front end developer, even though the dotnet comes with front end or back end stuff, what do I do when I've built an app? Like how do I put it online? So like I can just hook up a Jamstack hosting platform to my GIT repository, do a git push and great, there it is. It's online on a on a URL, I don't have to buy a domain even it's just there. And it's it's just so beautiful. And it's it really embodies the actual kind of agile kind of continuous delivery methodology as well. 

### Salma Alam-Naylor  9:26  
Every commit is a release, every commit is an immutable release. So you can roll back, you can have a look at the history you can you have, you can just click in a UI in like Vercel or Netlify or GitLab. Just click Oh, look at that. That's what I mean and week ago, I can compare that with what I've got now. And, and it scales. You don't even have to worry about scaling. If you get like a big hit on your proof of concept or whatever. And you know, it just enables developers to move fast to try things out to experiment and test Have fun without all the nonsense that developers have to deal with, day in, day out. And it's just a joy. 

### Salma Alam-Naylor  10:09  
And I've learned so much like, I never would have thought like, when I was building my like first websites maybe 10 10-12 years ago, my first proper websites, I never would have thought that I would be utilizing a CDN at the edge. And all of these different rendering methods, depending on the data that I needed to serve, auto scaling, immutable deploys, Git integration, infrastructure, serverless functions, you know, it's like a whole ecosystem that lets you try stuff, to see if it's gonna work. And if it does work, you can go further and make it robust. Like one of one of my biggest slogans is also build first engineer later. And that I think, is a really like, core part of the Jamstack. Just get it live and see what happens. 

### Bryan Robinson  11:00  
And you can get it live in any number of ways too, right? You can if you're making a content driven thing to begin with, you don't need a CMS. But yes, it takes like a few lines of code tweaked. And your next js, your 11ty, your whatever static site generator, right, like just ingest from somewhere else. And it's good to go? 

### Salma Alam-Naylor  11:19  
Yes. It's very exciting. It's very exciting. Like imagine. So this has happened in the all in the last like six years since like, 2015, when the Jamstack kind of first came about, like what's going to happen in the next six years, and the next six years, and the next six years, I actually did. At the Contentful, fast forward conference at the beginning of November, I actually did the keynote with Stephan Judas, about the last 10 years of web development and how Jamstack came about to solve the problems of old school monolith solutions where back end and front end were divided, where everyone was reinventing the wheel the whole time. And the Jamstack has really come to like, solve these problems, where as a front end developer, you don't need all this back end nonsense anymore. You're and and because of that, it's like enabled developers, it's increased their skills is giving them the power is empowering developers to to build stuff that they couldn't have even dreamed of before. And I think that's really, really, like wonderful for the future. 

### Salma Alam-Naylor  12:24  
Like I have a four year old. And I can't wait to show him the stuff like he could put a website live. That's just an HTML page and JavaScript file, potentially, you know, on the Jamstack, when he's like, eight years old, you know. And imagine us being able to do that when we were eight.

### Bryan Robinson  12:46  
At like 14, I think I had my first website. And it was like Microsoft front page built like graphical UI, it was, it was quite choice. Yeah, my six year old, I built him a website in a day, he happened to have a piece of art that he brought home from school, that instead of writing his name on it, he had to write his his first first name, and last initial, because that was yet another, another kid in his class with that name. And then he wrote.com At the end, and I said, I bet that domain is open. And it was and like, I threw it together, uploaded the artwork. And then he told me, he's like, I want to like button. And I was like, I bet I could do that. But you have to do three pieces of art every week to to make it so that I'll build that for you. And then like, I was able to walk him through what I done. And he had no real understanding. But it was like, okay, I can. This is simple enough, I can show you and it's Yeah, super low bar.

### Salma Alam-Naylor  13:43  
Yeah, I can't wait. I can't wait for that. It's so empowering. And it's so exciting to see what our children could make one day with, how it's being innovated, and the improvements and the things that are being done on the Jamstack. And

### Bryan Robinson  13:57  
how it kind of opens up into like the the kind of natural open web platform. Yeah, walled garden is not something that you have to buy into. And it allowed, like, I used to teach a journalism class on HTML and CSS. And I was like, look, you'll you can you can do this. And if you do this, you don't have to depend on these other platforms anymore. And like, I would talk about the history of the web and how in the 90s, it was a creator focus space. And in the current state, in fact, like anything from like, 2010 on, it's very consumer based. And so it's like, there's this dichotomy of the web, and the more people that can be creators, the better. Yes, yeah. So we've talked about next JS some, obviously, you work at Contentful. We talked about the olden days of Jekyll and all that good stuff. What would you say is your current jam in the Jamstack? What's your favorite product? Or maybe it's a philosophy or framework. What makes you love the Jamstack?

### Salma Alam-Naylor  14:53  
It's sounds really nerdy. But what I like about the Jamstack is the different types. Types of rendering that are available. This is like, this is so ridiculous, but it's like. So obviously, I work for Contentful. Right, and I'm dealing with data like data comes from a CMS. But data is not all created equal. And so there are four types of rendering depending on the data your data needs, like, it's not just about like pages and posts and stuff, like there are some bits of data that are very granular, they might need to be more up to date than the others, because obviously, mainly Jamstack is static first, right? And so but not everything can be static. But not everything needs to be client side. And so that what the Jamstack has now is like these four types of rendering. So back in the old, old web days, everything was server side rendered, right, you you your web request, hit a server that went to the backend that generated from all the logic a, an HTML document and gave it back to the client, right. So we still got server side rendering on the Jamstack, which I think right now is really great for personalization for things like E commerce, and other things. Because I especially talk a lot about using query params with get server side props with NextJs. JS, for those kind of personalized experiences, rather than just serving everything statically to the same as same to everyone. But then we've got the static, so there's, the second one is static generation. So you've got a plain site content site, nothing changes, nothing needs to update it, just serve it as quickly as you can statically do your visitors great. But now we've got some fancy stuff, there's incremental static regeneration, which is based on a cache validation strategy called stale while revalidate. And what this does, especially inside next js is you choose when the server re validates your data. And at certain intervals, and if it is out of date, it will rebuild in the background via serverless functions. And then for the next visitor, it will show it up to date. So that's like good for kind of data that it's great if it's up to date doesn't matter if some people see it if it's out of date. And then you've got distributed persistent rendering, which so if you want the Jamstack to scale, you, you might have 1000s, and 1000s, and 1000s of pages, right from your CMS, your E commerce site or wherever. Now we know that with the Jamstack, a site to go live and be deployed, it needs to be pre built and pre rendered, right, but 1000s and 1000s of pages could take hours to build. And if you want to continuously deploy and be agile and move fast and break stuff, you can't have every single bill taking hours and hours and hours. So distributed percentage rendering, what it does, it lets you choose what pages are pre rendered, and then doesn't pre render the other ones, you could pre render like your top 20 pages or wherever at build time. But then when someone goes to visit a page that hasn't been pre rendered, it gets pre rendered at request time, and then cached at the edge for future requests. So we've moved away from like building static pages and static data on the Jamstack blanket to a flexible model where you can choose when your pages rendered, depending on the type of data that you're serving your visitors and how up to date it needs to be. It sounds really weird, but this is my favorite part of the Jamstack.

### Bryan Robinson  18:19  
So it obviously, right? Because like that's a lot. And like when you when you actually said like my favorite parts, the rendering modes like okay, all right, but no, totally. And like, here's my absolute favorite bit of that entire of that entire conversation, right? You don't have to understand any of what Salma just said, if you're listening, right? Because you can start and you can, like we talked about, like the accessibility of the Jamstack earlier, you can start and you can just upload an HTML file and you're Jamstack. But then you can bring on something like a nextjs or an 11ty or a Gatsby or what have you. And then you're doing a different kind of Jamstack. And then you can bring in, like you said, the incremental static regeneration ISR. We love acronyms. And that uses SWR another accurate acronym, and then you've got DPR. But you can learn those things slowly as you go. And like you said before it, you can build stuff and put it live and have no understanding of any of that and then come back and get a little bit of performance boost or a little bit of build boost or these little things. And you can go

### Salma Alam-Naylor  19:24  
When you need it. You know when it's appropriate when your site needs to scale when you've now got a CMS when you've got different types of data when you convert to use this database or something like that. And it's so flexible. It's not just static sites. It's it's a whole ecosystem that is so far removed from the monolithic way. We used to do things with just everything, everything from the server at request time done, or you know, everything from the CDN or request time static done. It's like there's these combinations Have those but then some more clever stuff that makes your workflow more efficient. That means that you don't need to worry about these things. And it's just like whoever thought of these things. I wish I had thought of those things. Oh, yeah. I'd feel pretty accomplished.

### Bryan Robinson  20:20  
Oh, yeah. And I mean, we'd be having a completely different conversation if either of us were there. But But, but in all seriousness, right, like, the fact that I built my son's  website, and it has a like button, I have no clue. Like, I've been doing this a long time, I have no clue how 10 years ago, I would have done that, because I would have had to stand up a server, I would have had to learn PHP or Python, or a server side scripting language, I would have had to do all these things, I would have had to do the JavaScript on the fly on the front end, I wouldn't have done it just pure and simple, I would not have done it. And literally, it was two hours of work 2 serverless functions and low clients are JavaScript and I was done.

### Salma Alam-Naylor  20:56  
Do you remember back in the day when front end development involved, like httpd conf files and things like that, and I had no idea what that meant server configuration, get out of my life, I just want to build some front end with JavaScript, I don't care about that stuff is in my way. And the amount of I used to work on the LAMP stack when I was first starting because I was doing PHP at work. And so like to set up a whole PHP server on your on your local machine with PHP, MyAdmin, and blah, blah, blah, like, I'm not hating on PHP is great. But as a front end developer, you don't want to deal with that. Because that's not what you are an expert in, that's not what you want to do. That's not what makes you happy. It's, you know, it doesn't make me happy, like the four different types of rendering on the Jamstack makes me happy.

### Bryan Robinson  21:51  
Well, and I mean, you get further into that. And you have to think about the DevOps. And like I, I pride myself on being able to find all the edge cases and break everyone's DevOps, that's something that I'm incredibly good at. And it comes from, like, I learned about Vagrant, and, you know, virtual machines on my laptop. And I, I haven't installed a vagrant or virtual machine on my laptop in six years now. And it is so refreshing.

### Salma Alam-Naylor  22:18  
Yes, I remember that used to do that was all I did at work on these big monolith systems and deploy systems. I wonder how far those systems are away from that now. But I wonder if that's still the same, but it's just, there's always, there's big pain points between Windows and Mac, as well. And the Jamstack doesn't really have that, because you're just running some Node in a terminal right to develop locally. And then you're just sending it to the CDN. It's just

### Bryan Robinson  22:46  
that like, like between Linux that you might have your server and Mac the Mac flavor versions, then then you got like title case sensitivity. Like no, no, don't make me think about that. Please. 

### Bryan Robinson  22:59  
Let's pivot a little bit. You have a music history. And so I'm very excited now that I've learned that for the next question, which is what is your actual musical jam right now? What's your favorite musician or album or what's playing on a day to day basis for you?

### Salma Alam-Naylor  23:14  
So I think whenever you ask a musician this question, they will always say, the classic developer line it depends. Always It depends. I have I like such a varied bag of music because I used to listen to such a varied bag of music when I was learning music and writing music. I like music from progressive metal to EDM to jazz to folk to weird sounds. A solid favorite band that I will always reach for is Architectes, which is a British metal core band. And me and my husband. I actually met my husband when I joined his band. So we've got like a lot of music in common. It was a progressive metal band long story a long time ago. But the song I have on repeat right now is more on the EDM side. It's called probably no one's ever heard of this. It's called move on by Grant and I love it right? Because another weird nerdy thing. This is a music nerdy thing now. You know how often in pop songs your head double tracked guitars like panned left and right. This song for the first time in my life, I have heard double tracked bass guitars, and they're playing slightly different things. One minute 47 into the song is a feast for your ears. It's amazing to listen to, and I can't stop listening to it because of this double bass track thing. Move on by Grant if you want to hear some nerdy stuff, musically.

### Bryan Robinson  24:42  
Now for that you probably need stereo headphones, right? Yeah, exactly. Get the benefit of that. Yes. Wow. Okay, that's I am not disappointed by the answer in any way shape or form. I learned a lot I didn't even know that was the thing double tracked anything so excellent nerding on that

### Salma Alam-Naylor  25:01  
Yeah, great nerding love it.

### Bryan Robinson  25:04  
Alright, so before we go, is there anything that you would like to promote out into the Jamstack ecosystem, anything, you're doing Contentful anything.

### Salma Alam-Naylor  25:11  
So on my Twitch streams, I stream twice a week. Currently, I always build on the Jamstack. And one of the most challenging projects I'm building is something called Unbreak dot tech, where, and sometimes it's weird to bring these stuff. These sometimes it's weird to bring these things up in these kinds of podcasts. But as a woman in tech on the internet, it's very difficult, full stop, to realize. And sometimes it generally falls on the women and the marginalized people to talk about the issues that we face. However, unbraked dot Tech offers a platform for men to talk to other men, about being a better person and treating women and marginalized people better. So I've been working on that on my stream, I am welcoming contributions from men who want to talk on the matter. And we'll see how it goes. It's a complete experiment. I have no idea. You know, again, I'm using the Jamstack to experiment and see how it goes. So it's all good. It's hosted on Netlify using like Netlify forms, it's built with NextJs. JS. And I work on that every now and then and see where it goes, you can now submit videos as well as articles to the site, and they have captioned I've got captions and all sorts of accessibility stuff going on. So that's the thing. Catch me on twitch twitch.tv/white p four, and three are the

### Bryan Robinson  26:45  
one of the hardest screen names in the business.

### Salma Alam-Naylor  26:48  
Yeah, I regret it holy.

### Bryan Robinson  26:50  
Anyway, definitely check out on what was it Unbreak tech it on Unbreak dot tech unbrick break dye Tech because I have heard way too many stories, and everyone should know the stories and again, the women and the marginalized people have had to tell them enough. So men, let's step up and do a little bit more around that. 

### Salma Alam-Naylor  27:09  
I appreciate that. 

### Bryan Robinson  27:10  
Salma, thanks so much for joining us on the show today. And I hope you keep doing amazing things, especially with Unbreak dot tech, and Contentful and everything in the Jamstack. And we hope to see some really cool stuff in the future.

### Salma Alam-Naylor  27:21  
Thank you, Bryan. Thanks for having me.

### Bryan Robinson  27:24  
Thanks again to our guest, and thanks to everyone out there listening to each new episode. If you enjoyed the podcast, be sure to leave a review, rating, Star heart favorite, whatever it is, and your podcast app of choice. Until next time, keep doing amazing things on the web. And remember, keep things jammy



Intro/outtro music by [bensound.com](https://bensound.com)