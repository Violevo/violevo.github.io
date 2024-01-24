
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

function showContent(index) {
    const contents = [
      // Content for Easy To Use
      `<div class="home-content1">
      <main class="home-main1">
        <h2 class="home-heading01">
          Using the watch is easy, with four simple steps:
        </h2>
        <p class="home-paragraph">
          <span>
            1: Learn morse code through our interactive morse code course.
            2: Strap on the smartwatch device to preferred location. <br>
            3: Connect included microphone to the smartwatch and place on person (somewhere near your face/neck). <br>
            4: Turn on the watch and you are good to go!
          </span>
          <br />
        </p>
      </main>
      <div class="home-explore-more">
        <p class="home-text14">Explore more -&gt;</p>
      </div>
    </div>
    <div class="home-image07">
      <img
        alt="image"
        src="public/SectionImages/fff.png"
        class="watch-image"
      />`,

      // Content for Stylish Design
      `<div class="home-content1">
      <main class="home-main1">
        <h2 class="home-heading01">
        Choose between our standard/pro models
        </h2>
        <p class="home-paragraph">
          <span>
          We have create a stylish, sleek and lighteweight smartwatch that can fit to anyones style. Choose between both our pro and standard models to best fit your style and needs.
          </span>
          <br />
        </p>
      </main>
      <div class="home-explore-more">
        <p class="home-text14">Explore more -&gt;</p>
      </div>
    </div>
    <div class="home-image07">
      <img
        alt="image"
        src="public/SectionImages/_PKr2oU1Q32.jpg"
        class="watch-image"
      />`,

      // Content for Low Profile
      `<div class="home-content1">
      <main class="home-main1">
        <h2 class="home-heading01">
        All packed into a small form factor smartwatch
        </h2>
        <p class="home-paragraph">
          <span>
          Our smartwatch is designed to be low-profile while packing in all the features you need. No need for any heavy and bulky technology, stay connected without the large and clunky tech.
          </span>
          <br />
        </p>
      </main>
      <div class="home-explore-more">
        <p class="home-text14">Explore more -&gt;</p>
      </div>
    </div>
    <div class="home-image07">
      <img
        alt="image"
        src="public/SectionImages/360_F_79644037_aGBfuH79KOQwoY1YXr6chN6FfEnVj1U9.jpg"
        class="watch-image"
      />`
    ];

    document.querySelector('.home-note').innerHTML = contents[index];
  }

  function showAndActivate(index) {
    showContent(index);
    activateFeature(index);
  }

  function activateFeature(index) {
    const features = document.querySelectorAll('.home-feature');

    features.forEach((feature, i) => {
      if (i === index) {
        feature.classList.add('feature-active');
      } else {
        feature.classList.remove('feature-active');
      }
    });
  }
  
  function goToSection(sectionId) {
    // Using smooth scroll for a better user experience
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }