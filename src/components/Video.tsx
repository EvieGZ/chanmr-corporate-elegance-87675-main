export default function VideoSection() {
  return (
    <section className="bg-[#f8f9fa] py-16 bg-gradient-to-b from-white">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left side */}
        <div className="col-span-1 flex flex-col justify-end px-8 lg:px-24">
          <div className="mb-6">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Lorem ipsum
            </p>
            <div className="w-8 h-[2px] bg-[#F4C025] mt-1"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed gravida, lorem sit amet consectetur suscipit, purus
            nisl facilisis urna, eget commodo justo lectus ut lorem. Curabitur
            ut justo sit amet eros vehicula ultricies ut id elit.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Fusce aliquet, lorem non consequat tincidunt, sem metus fermentum
            mauris, vitae luctus nisl erat vel arcu. Maecenas ultricies, eros
            quis ultricies malesuada, leo justo egestas mi, at laoreet neque
            ipsum non justo. Sed at lorem vitae metus placerat varius.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-6 pt-6  font-medium text-sm">
            <a href="#" className="underline hover:no-underline">
              Lorem ipsum
            </a>
            <a
              href="#"
              className="underline hover:no-underline border-x px-6 border-slate-300"
            >
              Dolor sit amet
            </a>
            <a href="#" className="underline hover:no-underline">
              Consectetur elit
            </a>
          </div>
        </div>

        {/* Right side - Video or image */}
        <div className="col-span-2 bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ah9fxkQrhQw?si=Nbmx60pl-dG68NNo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
