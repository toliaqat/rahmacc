import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Contact Us",
  alternates: {
    canonical: "https://rahmacc.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-12 sm:mt-12 lg:mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};


export default ContactPage;
