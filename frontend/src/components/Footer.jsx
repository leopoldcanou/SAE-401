export default function Footer() {
  return (
    <>
      <footer className="bg-black text-base text-[#9C9C9C]">
        <div className="px-4 py-8">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <div>
              <ul className="flex flex-col gap-2">
                <li>Support</li>
                <li>Gift cards</li>
                <li>Press</li>
                <li>Cookie Policy</li>
                <li>Competition conditions</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>Movie Codes for Business</li>
                <li>About us</li>
                <li>Terms of Use</li>
                <li>Personal data policy</li>
              </ul>
            </div>
            {/* Social icons */}
            <div className="flex gap-4">
              {/* Instagram SVG */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="fill-[#9C9C9C]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook SVG */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="fill-[#9C9C9C]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* Twitter SVG */}
              <a href="#" className="hover:text-gray-400">
                <svg
                  className="fill-[#9C9C9C]"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 462.799"
                >
                  <path d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-sm">
            <p>
              Supervisory authority: The Authority for Press, Radio and TV |
              Link to the European Commission&apos;s online platform for online
              dispute resolution
            </p>
            <p className="mt-4">
              © 2024 SF Anytime AB (org no. 556748-2616, VAT SE556748261601)
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
