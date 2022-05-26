<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Riyadh, Saudi Arabia",
          icon: "map-pin",
          link: "#",
        },
        {
          id: 2,
          name: "Ralajaji0@gmail.com",
          icon: "mail",
          link: "mailto:Ralajaji0@gmail.com",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>
