const Contact = () => {
  return (
    <div>
      <a
        href="mailto:softomslogistic@gmail.com"
        class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span class="w-full">Escríbenos al correo</span>
        <svg
          class="w-4 h-4 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>

      <div className="pb-8"></div>

      {/* <p className="text-white">809-878-7823</p> */}

      <div className="transition-all">
        <a
          href="https://wa.link/s16413"
          target="_blank"
          class="inline-flex flex-col items-start p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1"
        >
          <span class="flex items-center group">
            <span>Ponte en contacto con nosotros</span>
            <svg
              class="w-4 h-4 ml-2 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
