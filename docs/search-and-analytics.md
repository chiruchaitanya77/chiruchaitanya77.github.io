# Portfolio search and analytics

The portfolio uses the URL-prefix property `https://chiruchaitanya77.github.io/`. Its sitemap contains one page. The section links and project dialogs are part of that page.

## Security reports

`public/.well-known/security.txt` directs reports to the portfolio contact form. Check the form and renew the file before its November 1, 2027 expiry. After deployment, check that `/.well-known/security.txt` returns the text file on each portfolio host.

## Google Analytics 4

Open container `GTM-KW433VMZ` in Tag Manager. Connect the portfolio’s GA4 web stream as a Google Analytics destination, or create a Google tag with the stream’s measurement ID and the **Initialization – All Pages** trigger. Use one installation so each page load counts once. [Google’s setup guide](https://support.google.com/tagmanager/answer/9442095)

Create the following two **GA4 Event** tags using that measurement ID. [Google’s event setup guide](https://support.google.com/tagmanager/answer/13034206)

1. Create a Custom Event trigger for `select_content` and use that exact event name in its tag. Add the event parameters `content_type` and `content_id`, each mapped to a Data Layer Variable of the same name.
2. Create a second Custom Event trigger with regex matching enabled and event name `^(resume_open|generate_lead)$`. Set its tag’s event name to the built-in `{{Event}}` variable and leave the event parameters empty.

| Event | When it fires |
| --- | --- |
| `select_content` | A visitor opens a project. The event includes its public title and whether it is personal or freelance work. |
| `resume_open` | A visitor follows the résumé link. |
| `generate_lead` | EmailJS confirms a successful contact submission. No form fields are included. |

Use Tag Manager Preview to check the tags, publish the container, then check Realtime or DebugView in the intended Analytics property. To measure contact enquiries as conversions, mark `generate_lead` as a key event in that property.

## Google Search Console

After deploying the portfolio, add the URL-prefix property above. Choose **Google Tag Manager** verification while signed in with Publish or Admin permission on the container. The verification iframe lives immediately after the opening body tag in `public/index.html`. [Google’s verification requirements](https://support.google.com/webmasters/answer/9008080)

In **Sitemaps**, submit `https://chiruchaitanya77.github.io/sitemap.xml`. Use **URL inspection** on the homepage to check the live page and request indexing.
