# ideal-home [![Build Status](https://travis-ci.org/lirun3196/ideal-home.svg?branch=master)](https://travis-ci.org/lirun3196/ideal-home)

* Building a CI system using github,Travis and sauce labs
* Creating a list of design requirements to communicate with interior designer clearly and handily
* Based on [create-react-app](https://github.com/facebook/create-react-app)

## Adding Images, Files in batches

As per React's document, there are two ways to import images into the React's component. Both of them need you to import an image line by line.  
It break the DRY principle for me to code like that. then, I used the [require.context](https://webpack.js.org/guides/dependency-management/#require-context) of webpack to import images in batches.  
But Jest doesn’t support it. In addition, It isn’t friendly to ES6 modules and hard to statically analyze. Take a look at this [issue](https://github.com/facebook/create-react-app/issues/517).

Inspired by experience. I have thought out a way to get over it. Using node.js creat "code", just like javaScript template.  
An example:

```sh
yarn img <jsPth> <imgPath> <fileName>
```

```sh
├── my-project
│   ├── src
│   │   ├── components
│   │   │   ├── balcony
│   │   │   │   ├── balcony.css
│   │   │   │   ├── img
│   │   │   │   │   ├── img1.jpg
│   │   │   │   │   ├── img2.jpg
```

there is a default prefix path 'src/components/' in the [implemented code](https://github.com/lirun3196/ideal-home/blob/master/automate/imgPaths.js)

```sh
# execute under 'my-project' path
yarn img balcony
```

It will create a file named `imgPaths.js` in the balcony folder:

```js
//imgPaths.js
import img0 from "./img/img1.jpg";
import img1 from "./img/img2.jpg";

const imgPaths = [img0, img1];

export default imgPaths;
```

Now, you can import the images in batches. It's easy to maintain no matter you delete or add images.  
At present, the function is highly customized for my project. but you can easily extend it.

## The singlePage component

It's a flexible fullpage component. see [example](https://lirun3196.github.io/ideal-home/#/testSinglePage)  
the [code of example](https://github.com/lirun3196/ideal-home/blob/master/src/components/testSth/testSinglePage.js)

Some problems need to be solve:

    - it's not a standalone component
    - the `scroll flicker` between the normal scroll sction and fullpage section because of `inertial scrolling` of the browser, especially in mobile browser.
    - Browser support: incompatibility with IE because of [Flex](https://caniuse.com/#search=flex)

---

Continuous update......
