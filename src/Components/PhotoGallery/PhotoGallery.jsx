import React from "react";

const PhotoGallery = () => {
  return (
    <div>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <h1 className="mb-5 text-center text-3xl lg:text-5xl font-bold text-amber-500">
          Photo Gallery
        </h1>
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/SfqCgYh/gallery04.png"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/bKGjwjD/gallery03.png"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/x3NnLy8/gallery-1.png"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/KNj0ZTZ/gallery02.png"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/8xd6qBm/findus.png"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/5rBTy0g/menu.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
