import { Modal } from "antd";
import React, { useState } from "react";
import "./news.css";

export default function News() {
  const [newsletterModalVis, setNewsletterModalVis] = useState(false);

  return (
    <div>
      <h1>Keep up with the latest on our developments here.</h1>
      <p>
        As we continue to grow, we want to share our growth with you all. We
        will post updates here as time allows. To be in the know about what is
        up and coming, feel free to subscribe to our newsletter by clicking the
        button below. When subscribing, all subscribers will be automatically
        added to our quarterly drawing for Tiffany's Toolbox Giveaway.
      </p>
      <div>
        <a onClick={() => setNewsletterModalVis(!newsletterModalVis)}>
          <button>Subscribe</button>
        </a>
        <iframe
          className={newsletterModalVis ? "signup-form" : "hidden-signup"}
          src="https://cdn.forms-content.sg-form.com/7fc8c182-3472-11ec-bd3e-06eb709f0acd"
        />
      </div>
      <div className="news-list-container">
        <ol className="news-list">
          <li>Official site launching Fall 2022</li>
        </ol>
      </div>
    </div>
  );
}
