"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+27) 737 473 267",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ngqongwabuhle@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "7100 Delft South, 474 TRA5",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div>
            <form>form</form>
          </div>
          {/* info */}
          <div>info</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;