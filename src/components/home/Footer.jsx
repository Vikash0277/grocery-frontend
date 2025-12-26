export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark pt-10 pb-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* BRAND + PAYMENTS */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 text-primary dark:text-primary-light">
              <div className="relative w-8 h-8">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  <circle cx="12" cy="9" r="2" className="text-orange-500" />
                  <path
                    d="M12 7l2-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-green-500"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight dark:text-white">
                Gromuse
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            {/* Payments */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">
                Accepted Payments
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuARRvv__mHszrTDn27SfzG6DQvoi_mJpBpSPxv9h4m7-wwoV19gXQT1CiCoDZ-4rAqEM_yg8NBiuSsDp67B1mm1wZjsLiqVipDAiGsJQ0ETACv-Jr98S1g1auJBJUrlQmFk1iZHB2iXy91kX05d8-77n8BgXvBRrGvXydy-DV-asdz5Hm_7cUFdttHnx5y8YffTt_og0JrbxdmOhCtBtU8YQFLhUXjAvRmz9U1GCQr71dm6TGRgq-JyiJAHb2JVEkriN4MinRN7Tg",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCj_5imrT_TbdyufgmM_7PZ6_30FNli-PMEWpCmAif8lQpcuq_754s8_3Hsgjpg7sBoqqb8ONY96SdfmvV0vUr4MQS3pGjw1X4rTfJpOLrswwDZ-Y31w4VlT0JF_-Jhbw-drs7OeTZcCmjWiFiUrrVrQhTTG_shDxvtaiOVP4BVPnzOnNciYHIOumhENxZ5_gSCTcZAY42yl-kmeP2e6HciUbH8GVQXwg3G6E7w3BC9QHydeH62Ly-nhubTJYUeNOkgkCLsqj5gWw",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCn5x42gh3oFt-OG6eZ8wMxI9go6jMd1zNQDKFyO5aVtpTVUBVvGNrJP9MoTeaP7-24XYKHSclIAAocWoSoDFR5C9w1bU5LwyiGTieG_WGc7Xm-HwO-wIx6EAwCUkpvdyLjAM8KkhsfP6M2EwmcrwslPFVKjmbH1vhh84ToJ-yC3FgFEXnQgI18UYVg69KqALWC-3hx-zH-HBAv52wJiutbZRD94cmqURxEBf5EiJcXbsL3VbFFoC-koCHLmTMmeEsf_JUvK8Dz6A",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Cj7q2S69dakf35sEby2xEQMpoOx3B6WgVJV9Sgisrl8QX0oh_jAV57W8AGCLtQzAWf4Q_ERfMu_1Suv3X-UCxUoHsnj92_tCPcCoywUBGDz9g0riHBqNXsTGcgqTgkPM5Fsj08BwgLyoPvTXqdpA8JY6E-_49Jj6ummSfMIfP1Qxn2kLd7CP5G50COOpf7w-yonFuWadyk0M60tpRs_iqsOCFvFds-hONblSzE9OTvFcTlml1V4Z1adAZKH_KipKTtirWpUhQg",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_ANcMlfV20xxb9JiXgHZZB8goEGBJ7xQvWFFjNKdIqltapP1cvvsLA53Vr0xmxp9Z9XCyPKsLjFu07XnoNpwF004zv6Q44rmt1N4CXuzy7ShSzUBdBHByj1GBcbweVbavCJSpcVAlsQRYDzmAku42WjwfURnMaRKyFhSi0wzY46PyufMaxBR51YE6Fei5D_ZpcP2nDUFcuuqeenn3QEFx1Bd2XqbUvplTOa0NAizFpFScU6h9BaMj-3IXlthfYeVs3juGbqewHg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="h-8 px-2 bg-white border border-gray-200 rounded flex items-center justify-center dark:bg-gray-800 dark:border-gray-700"
                  >
                    <img src={src} alt="" className="h-4 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Department",
                links: [
                  "Fashion",
                  "Education Product",
                  "Frozen Food",
                  "Beverages",
                  "Organic Grocery",
                  "Office Supplies",
                  "Beauty Products",
                ],
              },
              {
                title: "About us",
                links: [
                  "About shopcart",
                  "Careers",
                  "News & Blog",
                  "Help",
                  "Press Center",
                ],
              },
              {
                title: "Services",
                links: [
                  "Gift Card",
                  "Mobile App",
                  "Shipping & Delivery",
                  "Order Pickup",
                ],
              },
              {
                title: "Help",
                links: [
                  "Shopcart Help",
                  "Returns",
                  "Track orders",
                  "Contact us",
                ],
              },
            ].map((col, i) => (
              <div key={i}>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400">
            <a className="flex items-center gap-1 hover:text-primary dark:hover:text-primary-light">
              <span className="material-icons-round text-lg">help_outline</span>
              Help Center
            </a>
            <a className="hover:text-primary dark:hover:text-primary-light">
              Terms of Use
            </a>
            <a className="hover:text-primary dark:hover:text-primary-light">
              Privacy Policy
            </a>
          </div>
          <div className="text-gray-400 dark:text-gray-500 text-center md:text-right">
            All Right reserved by Musemind | 2022
          </div>
        </div>
      </div>
    </footer>
  );
}
