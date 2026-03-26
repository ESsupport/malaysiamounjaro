export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "name": "Malaysia Mounjaro",
        "description": "FDA-approved Mounjaro KwikPen for safe and effective weight loss in Malaysia",
        "url": "https://malaysiamounjaro.com",
        "telephone": "+60167096799",
        "priceRange": "$$",
        "image": "https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MY",
          "addressRegion": "Malaysia"
        }
      },
      {
        "@type": "Product",
        "name": "Mounjaro KwikPen",
        "description": "FDA-approved Tirzepatide weight loss injection pen. Available in multiple doses: 2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, 15mg",
        "brand": {
          "@type": "Brand",
          "name": "Mounjaro"
        },
        "image": "https://malaysiamounjaro.com/banner/malaysia_mounjarro_banner.png",
        "offers": {
          "@type": "AggregateOffer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "MYR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "150"
        }
      },
      {
        "@type": "WebSite",
        "name": "Malaysia Mounjaro",
        "url": "https://malaysiamounjaro.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://malaysiamounjaro.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Mounjaro KwikPen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mounjaro KwikPen is an FDA-approved Tirzepatide injection pen for weight loss and diabetes management. It's a once-weekly injection that helps with safe and effective weight loss."
            }
          },
          {
            "@type": "Question",
            "name": "How to use Mounjaro KwikPen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mounjaro KwikPen is injected once weekly subcutaneously. Watch our tutorial videos for step-by-step instructions on proper usage."
            }
          },
          {
            "@type": "Question",
            "name": "What doses are available for Mounjaro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mounjaro is available in 6 doses: 2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg. Your healthcare provider will determine the right dose for you."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

