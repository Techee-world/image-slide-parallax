import React from 'react'

const Parallax = () => {
  return (
    <div>
      <div class="p-20 bg-slate-800">
        <h3 class="text-xl text-white font-light uppercase">enjoy...</h3>
      </div>

      <div
        class="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg)",
        }}
      >
        <h1 class="text-white opacity-80 drop-shadow-md text-4xl  font-bold">
          mountain is good beauty
        </h1>
      </div>

      <div class="p-20 space-y-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet viverra ante et tincidunt. Nullam mollis, elit consectetur
          iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed
          nibh. Nam eu eros fermentum, aliquam sem at, accumsan augue. Aenean
          lacus lorem, interdum vel fermentum sed, sodales id libero. Nullam
          vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam
          et orci at mi ultricies laoreet et eget ipsum. Aliquam luctus posuere
          efficitur. Mauris scelerisque leo malesuada tellus malesuada accumsan.
          Ut non metus velit. Vestibulum lectus nulla, ornare a nisl nec,
          pretium viverra tellus. Phasellus sit amet magna augue. Sed a diam
          pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.
        </p>
      </div>
      <div
        class="w-full mb-20 h-screen bg-fixed bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2014/12/15/13/57/sunset-569093_1280.jpg)",
        }}
      >
        <h1 class="text-white opacity-80 drop-shadow-md text-4xl  font-bold">
          Welcome to new city
        </h1>
      </div>
      <div class="p-20 space-y-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          imperdiet viverra ante et tincidunt. Nullam mollis, elit consectetur
          iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed
          nibh. Nam eu eros fermentum, aliquam sem at, accumsan augue. Aenean
          lacus lorem, interdum vel fermentum sed, sodales id libero. Nullam
          vulputate commodo urna id mattis. Fusce iaculis maximus felis. Nullam
          et orci at mi ultricies laoreet et eget ipsum. Aliquam luctus posuere
          efficitur. Mauris scelerisque leo malesuada tellus malesuada accumsan.
          Ut non metus velit. Vestibulum lectus nulla, ornare a nisl nec,
          pretium viverra tellus. Phasellus sit amet magna augue. Sed a diam
          pulvinar metus auctor tincidunt sed quis purus. Donec id lorem diam.
        </p>
      </div>
    </div>
  );
}

export default Parallax