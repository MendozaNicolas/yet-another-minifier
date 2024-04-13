"use client"
import Navbar from "@/components/navbar";
import CopyButton from "@/components/copy-button";
import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('');
  const [minifiedCode, setMinifiedCode] = useState('');


  const minify = (code) => {
    // Remove comments (basic approach)
    code = code.replace(/\/\/.*|\/\*[^*]*\*\//g, "");

    // Remove extra whitespaces (except around operators)
    code = code.replace(/\s+/g, " ").trim();

    // Remove empty lines (optional)
    code = code.replace(/^\s*|\s*$/gm, "");

    // Shorten selectors (optional - use with caution)
    // This can lead to naming conflicts and reduced readability
    // code = code.replace(/\.[^\s]+/g, ".x"); // Example replacement

    return code;
  };

  const handleMinify = () => {
    const minified = minify(code);
    setMinifiedCode(minified);
  };

  const handleClear = () => {
    setMinifiedCode('');
    setCode('');
  };

  return (
    <main className="bg-base-200 overflow-x-hidden">
      <Navbar />
      <section className="w-screen h-screen p-5">
        <div className="flex justify-center items-center flex-col gap-5">
          <textarea value={code} onChange={(e) => setCode(e.target.value)} className="textarea textarea-bordered resize-none w-5/6 h-80" placeholder="Input"></textarea>
          <div className="join w-5/6">
            <input readOnly type="text" value={minifiedCode} onChange={(e) => { setMinifiedCode(e.target.value); }} placeholder="Output" className="input input-bordered w-full join-item" />
            <CopyButton inputValue={minifiedCode} className="btn btn-primary join-item" />
          </div>

          <div className="w-5/6">
            <button className="btn btn-active btn-primary" onClick={handleMinify}>Minify it</button>
            <button className="btn btn-error mx-3 btn-primary" onClick={handleClear}>Clear</button>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen p-5">
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="w-5/6 my-5">
            <h2 className="text-primary font-bold text-2xl mb-5">What is Minification</h2>
            <p>
              <b>Minification</b> is the process of minimizing code and markup in your web pages and script files.
              It’s one of the main methods used to reduce load times and bandwidth usage on websites.
              Minification dramatically improves site speed and accessibility,
              directly translating into a better user experience.
              It’s also beneficial to users accessing your website through a limited data plan and who would like to save on their bandwidth usage while surfing the web.
            </p>
          </div>
          <div className="w-5/6 my-5">
            <h2 className="text-primary font-bold text-2xl mb-5">Why minify HTML, CSS, and JavaScript (JS)</h2>
            <p className="mb-5">
              When creating HTML, CSS and JavaScript (JS) files, developers tend to use spacing, c
              omments and well-named variables to make code and markup readable for themselves.
              It also helps others who might later work on the assets.
              While this is a plus in the development phase, it becomes a negative when it comes to serving your pages.
              Web servers and browsers can parse file content without comments and well-structured code,
              both of which create additional network traffic without providing any functional benefit.
            </p>
            <p>
              To minify JS, CSS and HTML files, comments and extra spaces need to be removed,
              as well as crunch variable names so as to minimize code and reduce file size.
              The minified file version provides the same functionality while reducing the bandwidth of network requests.
            </p>

          </div>
        </div>
      </section>

      <footer>
        <div className="flex justify-center m-5">
          <span>
            Made with ❤ by Nicolas Mendoza.
          </span>
        </div>
      </footer>
    </main>
  );
}
