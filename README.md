# Eleventy By Example			
Eleventy By Example, published by Packt

<a href="https://www.packtpub.com/product/eleventy-by-example/9781804610497"><img src="https://static.packt-cdn.com/products/9781804610497/cover/smaller" alt="Eleventy By Example" height="256px" align="right"></a>

This is the code repository for [Eleventy By Example](https://www.packtpub.com/product/eleventy-by-example/9781804610497), published by Packt.

**Create powerful, performant websites with a static-first strategy**

## What is this book about?

This book is for anyone looking to build efficient websites while shipping less JavaScript to the client. Strong knowledge of HTML and CSS and beginner-level knowledge of JavaScript and the Node.js ecosystem, including querying APIs is a must.	

This book covers the following exciting features:

* Create a basic website with reusable templates and globally available data
* Build a blog using 11ty’s collections
* Set up a photography site that uses the 11ty Image plugin to deploy properly sized images
* Connect a content management system to provide an enhanced editor and developer experience
* Model an enhanced search experience with no dedicated server through serverless functions and 11ty Serverless
* Boost productivity by creating custom 11ty tools and plugins

If you feel this book is for you, get your [copy](https://www.amazon.com/Eleventy-Example-performant-static-first-mentality/dp/1804610496/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" 
alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders. For example, Project1.

The code will look like the following:
```
{% if title or bannerContent %}
  <section class="banner">
    {% if title %}<h1>{{ title }}</h1>{% endif %}
    {% if bannerContent %}<p>{{ bannerContent }}</p>{% endif %}
  </section>
{% endif %}


```

**Following is what you need for this book:**

11ty is the dark horse of the Jamstack world, offering unparalleled flexibility and performance that gives it an edge against other static site generators such as Jekyll and Hugo. With it, developers can leverage the complete Node ecosystem and create blazing-fast, static-first websites that can be deployed from a content delivery network or a simple server. This book will teach you how to set up, customize, and make the most of 11ty in no time.

With the following software and hardware list you can run all code files present in the book (Chapter 1-10).
### Software and Hardware List
| Software required                    | OS required                         |
| ------------------------------------ | ----------------------------------- |
| 11ty 2.0                             | Windows, macOS, or Linux            |
| Node.js 18                           | Windows, macOS, or Linux            |

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://packt.link/ERy5P).


### Related products <Other books you may enjoy>
* Real-World Next.js  [[Packt]](https://www.packtpub.com/product/real-world-nextjs/9781801073493) [[Amazon]](https://www.amazon.com/Real-World-Next-js-high-performance-applications-production/dp/180107349X)

* Elevating React Web Development with Gatsby  [[Packt]](https://www.packtpub.com/product/elevating-react-web-development-with-gatsby/9781800209091) [[Amazon]](https://www.amazon.com/Elevating-React-Web-Development-Gatsby/dp/1800209096)

## Get to Know the Author
**Bryan Robinson** is a developer and designer with over 15 years of experience building and leading teams on the web. He enjoys well-written HTML, clean CSS, and just the right amount of JavaScript.
