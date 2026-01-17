import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Verma",
    designation: "Founder, Startup Business",
    image: image1,
    content:
      "AYDEX Technologies helped us build a fast, scalable web platform and automated our customer workflows. Their team understood our requirements clearly and delivered exactly what we needed.",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    designation: "Marketing Manager",
    image: image2,
    content:
      "We partnered with AYDEX for marketing automation and WhatsApp integration. The results were impressive — faster responses, better engagement, and improved lead conversion.",
  },
  {
    id: 3,
    name: "Amit Singh",
    designation: "Co-Founder, Tech Startup",
    image: image1,
    content:
      "The AYDEX team is reliable, responsive, and highly skilled. They delivered our software project on time and provided great post-launch support.",
  },
  {
    id: 4,
    name: "Neha Gupta",
    designation: "Small Business Owner",
    image: image2,
    content:
      "AYDEX helped us automate our business processes and improve our online presence. Their solutions are practical, cost-effective, and easy to scale.",
  },
];
