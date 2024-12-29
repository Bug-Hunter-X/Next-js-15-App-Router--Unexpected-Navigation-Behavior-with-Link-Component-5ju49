```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}

// app/about/page.js

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```