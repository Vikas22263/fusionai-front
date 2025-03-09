import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    // { icon: <Github size={20} />, href: "#", label: "GitHub" },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/algofusionai",
      label: "LinkedIn",
    },
    // { icon: <Mail size={20} />, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-[#161514] text-gray-300 border-t border-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Brand and social */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              AlgoFusionAi
            </h3>
            <p className="text-sm mb-6 max-w-sm">
              Your intelligent trading companion powered by advanced AI
              algorithms.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-gray-400 hover:text-accent-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links in a single row */}
          <div className="flex flex-wrap gap-12">
            {[
              {
                title: "Product",
                items: [
                  "Fusion AI",
                  "Puller&Draggers",
                  "Real-tick Meter",
                  "Most Active Stock",
                ],
              },
              {
                title: "Company",
                items: ["About Us"],
              },
              {
                title: "Legal",
                items: ["Privacy Policy"],
              },
            ].map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex-shrink-0">
                {/* Section Title */}
                <h4 className="text-lg font-semibold text-white mb-4">
                  {section.title}
                </h4>

                {/* Links List */}
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={
                          sectionIndex === 0
                            ? "/FusionAi"
                            : sectionIndex === 1
                            ? "/about"
                            : sectionIndex === 2
                            ? "/Privacy-Policy"
                            : "#"
                        }
                        aria-label={`${section.title} - ${item}`}
                        className="text-gray-400 hover:text-accent-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p className="text-gray-400">
            &copy; {currentYear} AlgoFusionAi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
