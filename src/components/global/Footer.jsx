import EffectButton from './utils/EffectButton';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer
      className="bg-no-repeat py-12 bg-gray-200 dark:bg-dark22 bg-fixed"
      style={{
        // backgroundImage: `url('/svgs/footer.svg'), liear-gradient(black, blue)`,
        background: `linear-gradient(0deg, #000, #000000ed), url(/svgs/footer.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="responsive flex justify-between flex-col-reverse md:flex-row text-center">
        <div className="w-full md:w-6/12 grid grid-cols-12 mx-auto text-white">
          <div className="mb-7 col-span-6 screen_400:col-span-4 inline-flex flex-col space-y-3 text-sm px-4">
            <h3 className="uppercase font-semibold">StackPortal</h3>
            <Link href="/">Features</Link>
            <Link href="/">Freebies</Link>
            <Link href="/">Premium</Link>
            <Link href="/">Pricing</Link>
          </div>
          <div className="mb-7 col-span-6 screen_400:col-span-4 inline-flex flex-col space-y-3 text-sm">
            <h3 className="uppercase font-semibold">Products</h3>
            <Link href="/">Templates</Link>
            <Link href="/">Scripts</Link>
            <Link href="/">Designs</Link>
            <Link href="/">Frontend Solution</Link>
          </div>
          <div className="mb-7 col-span-6 screen_400:col-span-4 inline-flex flex-col space-y-3 text-sm">
            <h3 className="uppercase font-semibold">Resources</h3>
            <Link href="/">Blog</Link>
            <Link href="/">About</Link>
          </div>
        </div>

        <div className="w-full md:w-5/12 mx-auto px-0 pb-12 sm:px-12 sm:pt-12 md:p-0">
          {/* Contact Form */}
          <input
            type="text"
            className="px-4 py-2 rounded outline-none focus:ring box-border w-full text-white capitalize bg-gray-700 bg-opacity-50"
            aria-label="your name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="px-4 my-5 py-2 rounded outline-none focus:ring box-border w-full text-white bg-gray-700 bg-opacity-50"
            aria-label="your email"
            placeholder="Your Email"
          />
          <textarea
            className="px-4 h-32 py-2 rounded outline-none focus:ring box-border w-full text-white bg-gray-700 bg-opacity-50"
            placeholder="Your Message"
          ></textarea>
          <EffectButton className="mt-3 bg-white bg-opacity-30">
            Send Message
          </EffectButton>
        </div>
      </div>
    </footer>
  );
}
