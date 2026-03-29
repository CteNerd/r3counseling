import "./resources.css";
import { useEffect } from "react";

interface Props {
  isMobile: boolean;
}

export default function Resources(props: Props) {
  useEffect(() => {
    const resourcesTitle = "Resources | Release Restore Redefine Counseling";
    const resourcesDescription =
      "Crisis and support resources, warm lines, and mental health tools for individuals and families in Georgia and nationwide.";
    const resourcesUrl = "https://r3counseling.com/resources";

    document.title = resourcesTitle;

    const upsertMetaTag = (
      selector: string,
      attributeName: "name" | "property",
      attributeValue: string,
      content: string
    ) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const canonicalLink =
      (document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null) ||
      document.createElement("link");

    canonicalLink.setAttribute("rel", "canonical");
    canonicalLink.setAttribute("href", resourcesUrl);

    if (!canonicalLink.parentNode) {
      document.head.appendChild(canonicalLink);
    }

    upsertMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      resourcesDescription
    );
    upsertMetaTag('meta[property="og:title"]', "property", "og:title", resourcesTitle);
    upsertMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      resourcesDescription
    );
    upsertMetaTag('meta[property="og:url"]', "property", "og:url", resourcesUrl);
    upsertMetaTag('meta[name="twitter:title"]', "name", "twitter:title", resourcesTitle);
    upsertMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      resourcesDescription
    );

    const resourcesSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Resources to Release",
      description: resourcesDescription,
      url: resourcesUrl,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "National Suicide and Crisis Lifeline",
            url: "tel:988",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Georgia Crisis Access Line",
            url: "tel:18007154225",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CARES Warm Line",
            url: "tel:18443265400",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "National Sexual Assault Hotline",
            url: "tel:18006564673",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Domestic Violence National Hotline",
            url: "tel:18007997233",
          },
        ],
      },
    };

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "resources-page-schema";
    schemaScript.text = JSON.stringify(resourcesSchema);
    document.head.appendChild(schemaScript);

    return () => {
      const existingSchema = document.getElementById("resources-page-schema");

      if (existingSchema) {
        existingSchema.remove();
      }
    };
  }, []);

  return (
    <div>
      <h1>Resources to Release</h1>
      <div style={{ display: props.isMobile ? "block" : "flex" }}>
        <div>
          <ul>
            <li>
              <a href="tel:988">National Suicide/Mental Health Crisis Line</a>
              <ul>
                <li>Available 24/7/365. Dial or Text 988 for HELP</li>
              </ul>
            </li>
            <li>
              <a href="tel:18007154225">Georgia Crisis Access Line</a>
              <ul>
                <li>
                  Available 24 hours a day/7 days per week. Available to help
                  anyone in crisis. Also, a provider for a COMP Waiver
                  Application
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18443265400">
                CARES Warm Line (Georgia Certified Addiction Recovery
                Specialist)
              </a>
              <ul>
                <li>
                  Certified Addiction Specialist to provide support for those
                  with substance abuse challenges. Call or text daily 8:30
                  am-11:00 pm (time subject to change){" "}
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18663998938">
                Georgia COVID-19 Emotional Support Line
              </a>
              <ul>
                <li>
                  Providing free and confidential emotional support and
                  resources to anyone daily from 8:00 am-11:00 pm (time subject
                  to change){" "}
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:7067363094">
                National Alliance on Mental Illness (NAMI)
              </a>
              <ul>
                <li>
                  Provider of support groups, education, and advocacy for
                  individuals and family impacted by mental illness needs
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18007296686">
                Substance Abuse and Mental Health Services Administration
              </a>
              <ul>
                <li>Call 1-800-729-6686 or 1-800-789-2647</li>
              </ul>
            </li>
            <li>
              <a href="tel:7069450920">Focus on Reocvery</a>
              <ul>
                <li>
                  Recovery Community Organization which focuses on ensuring
                  individuals or families are empowered to lead healthy lives as
                  they seek recovery
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18775658860">Trans Peer Support Lifeline</a>
              <ul>
                <li>
                  Providing direct emotional and financial support to those in
                  crisis. Available 24 hours a day/7 days per week
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18002738255,1">Veterans Crisis Line</a>
              <ul>
                <li>
                  Confidential line for Veterans needing emotional support.
                  Available 24 hours a day/7 days per week
                </li>
              </ul>
            </li>
            <li>
              <a href="tel:18002738255">National Suicide Prevention Lifeline</a>
              <ul>
                <li>Free emotional support and resource line</li>
              </ul>
            </li>
            <li>
              <a href="tel:18006564673">National Sexual Assault Hotline</a>
            </li>
            <li>
              <a href="tel:18007997233">Domestic Violence National Hotline</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Help at Your Fingertips... Apps to Download</h4>
        <div style={{ display: props.isMobile ? "block" : "flex" }}>
          <div className="help-app-container">
            <h5>My GCal App</h5>
            <p>
              For youth in the state of Georgia to have free access to a mental
              health counselor 24 hours a day/7 days per week. Youth can chat
              via text message or phone
            </p>
            <div>
              <a href="https://apps.apple.com/us/app/my-gcal-app/id1449949560">
                <button>Download for Apple</button>
              </a>
            </div>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.mygcal.app&hl=en_US&gl=US">
                <button>Download for Android</button>
              </a>
            </div>
          </div>
          <div className="help-app-container">
            <h5>NotOKAY App</h5>
            <p>
              Provides youth access to a digital panic button, which provides
              immediate support and GPS tracking capability to meet individuals
              at their location
            </p>
            <div>
              <a href="https://apps.apple.com/us/app/notok/id1322629109">
                <button>Download for Apple</button>
              </a>
            </div>
            <div>
              <a
                href={
                  "https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.robinlucas.notok"
                }
              >
                <button>Download for Android</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
