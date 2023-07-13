const contacts = [
  {
    name: "email",
    url: "mailto:stanjosh@gmail.com",
    image: "assets/images/email.svg",
  },
  {
    name: "github",
    url: "https://github.com/stanjosh",
    image: "assets/images/github.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/stanjosh/",
    image: "assets/images/linkedin.svg",
  },
  {
    name: "resume",
    url: "https://stanj.link/resume",
    image: "assets/images/resume.svg",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <h2>contact</h2>
      <div className="contact about section">
        {contacts.map((contact, key) => {
          return (
            <a href={contact.url} rel="noreferrer" target="_blank" key={key} className="contactItem">
                <div className="contactItem">
                    <img src={contact.image} />
                    <span data-outline={contact.name}>{contact.name}</span>
                </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
