import browser from 'webextension-polyfill';

const photos = [
  {
    src: "file:///Users/kemaldenizozben/Desktop/Fotog%CC%86raf%20-%202.06.2020%2016.19.jpg",
  },
  {
    src: "file:///Users/kemaldenizozben/Desktop/Fotog%CC%86raf%20-%2017.05.2020%2013.33.jpg",
  },
  {
    src: "file:///Users/kemaldenizozben/Desktop/Fotog%CC%86raf%20-%203.04.2020%2010.17.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1488409688217-e6053b1e8f42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1520106392146-ef585c111254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1548154049-18dfc3fcb18b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1531616918159-0c11198cd033?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },
  {
    src: "https://images.unsplash.com/photo-1465865523598-a834aac5d3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=400&fit=crop",
  },  
];


browser.runtime.onInstalled.addListener(async () => {
    browser.storage.local.set({'photos': photos});
    browser.storage.sync.set({'gameIsOn': true});
    browser.storage.local.set({'backgroundSrc': photos[0]});
});
