<script lang="ts">
  import { onMount } from 'svelte';

  const repo = 'AccountMap';
  const demoUrl = 'https://demo.accountmap.org';

  // Screenshots: add files to static/screenshots/ and list filenames here (e.g. 1.jpg, 2.png)
  const screenshotSlides = $state<string[]>(['1.png', '2.png', '3.png', '4.png', '5.png']);
  let currentSlideIndex = $state(0);
  const SLIDE_INTERVAL_MS = 5000;
  const FADE_DURATION_MS = 1200;
  let intervalId: ReturnType<typeof setInterval> | null = null;

  onMount(() => {
    if (screenshotSlides.length <= 1) return;
    intervalId = setInterval(() => {
      currentSlideIndex = (currentSlideIndex + 1) % screenshotSlides.length;
    }, SLIDE_INTERVAL_MS);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  });
</script>

<svelte:head>
  <title>AccountMap</title>
</svelte:head>

<main class="min-h-screen bg-[#0a0a0c] text-white selection:bg-cyan-500/30">
  <header
    class="sticky top-0 z-50 w-full bg-[#0a0a0c]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#0a0a0c]/80"
  >
    <nav
      class="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-3 flex justify-between items-center"
    >
      <div class="text-lg sm:text-xl font-bold flex items-center gap-2 min-w-0">
        <img
          src="/favicon.svg"
          alt="AccountMap"
          class="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
        />
        <span class="leading-none whitespace-nowrap truncate font-bold text-blue-500">
          AccountMap
        </span>
      </div>
      <div class="flex items-center gap-4 sm:gap-6 text-sm font-medium text-gray-400 shrink-0">
        <button
          type="button"
          class="hover:text-cyan-200 transition-colors"
          onclick={() => {
            const el = document.getElementById('features');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Features
        </button>
        <a
          href="https://github.com/{repo}"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-cyan-200 transition-colors"
          >GitHub</a
        >
      </div>
    </nav>
  </header>

  <section class="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-32 text-center">
    <h1
      class="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-[#f5b3ff] via-[#7dd3fc] to-[#4ade80] bg-clip-text text-transparent"
    >
      Control your<br />digital footprint.
    </h1>

    <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
      An Open-Source, Community Driven, Award Winning application that helps you manage your different login methods for each account. View your
      accounts on a 3D map, switch to 2D or list view, and keep everything in one place.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="group w-full sm:w-auto px-8 py-4 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl bg-gradient-to-r from-[#f5b3ff]/20 via-[#7dd3fc]/20 to-[#4ade80]/20 text-white border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(125,211,252,0.15)]"
      >
        <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="flex flex-col items-start">
          <span>Try Web Demo</span>
          <span class="text-xs font-normal text-white/45">Hackathon version</span>
        </span>
      </a>
      <a
        href="https://github.com/{repo}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full sm:w-auto px-8 py-4 font-bold rounded-2xl transition-all flex items-center justify-center gap-3 bg-white/[0.06] border border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
        </svg>
        View on GitHub
      </a>
    </div>

    <p class="text-sm text-gray-500 mt-6 mb-3">Native apps</p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onclick={() => alert('Coming in the future.')}
        class="px-6 py-3 font-medium rounded-xl bg-gray-900/80 text-gray-500 border border-gray-800 cursor-not-allowed opacity-80 flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1V11.7H0V3.449zm0 17.1L9.75 21.9V12.3H0v8.249zM10.5 2V11.7H24V0L10.5 2zm0 19.9l13.5 2V12.3H10.5v9.6z"/></svg>
        Windows
      </button>
      <button
        type="button"
        onclick={() => alert('Coming in the future.')}
        class="px-6 py-3 font-medium rounded-xl bg-gray-900/80 text-gray-500 border border-gray-800 cursor-not-allowed opacity-80 flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.057 12.781c.032 2.588 2.246 3.445 2.275 3.457-.022.072-.351 1.205-1.152 2.372-.693 1.012-1.411 2.019-2.544 2.039-1.112.021-1.472-.653-2.743-.653-1.269 0-1.669.633-2.723.674-1.112.039-1.942-1.109-2.64-2.119-1.428-2.067-2.518-5.842-1.047-8.388.73-1.263 2.032-2.063 3.444-2.083 1.074-.021 2.089.721 2.744.721.653 0 1.889-.904 3.161-.773 1.152.126 2.043.619 2.658 1.487-1.428.846-1.173 2.744.02 3.298zm-2.484-7.461c.563-.683.946-1.636.841-2.584-.816.033-1.801.543-2.387 1.226-.525.607-.985 1.583-.861 2.508.911.071 1.844-.467 2.407-1.15z"/></svg>
        macOS
      </button>
      <button
        type="button"
        onclick={() => alert('Coming in the future.')}
        class="px-6 py-3 font-medium rounded-xl bg-gray-900/80 text-gray-500 border border-gray-800 cursor-not-allowed opacity-80 flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 2.166-.027 4.386.137 6.529.265 3.443 3.382 5.15 6.314 5.117 2.955-.033 5.717-2.169 5.96-5.24.27-3.418-.235-6.551-3.018-8.229-.332-.2-.646-.348-.924-.454-.27-.103-.502-.158-.68-.192-.115-.022-.21-.034-.289-.04zm-.001 2.53c.08.006.17.018.277.04.147.03.333.082.546.17.272.11.594.27.947.485 2.273 1.37 2.95 3.927 2.733 6.792-.21 2.756-2.006 4.447-4.532 4.447-2.235 0-4.302-1.568-4.483-4.044-.168-2.298.248-5.202 3.053-6.888z"/></svg>
        Linux
      </button>
    </div>
  </section>

  <section class="max-w-6xl mx-auto px-6 pb-32">
    <div class="bg-gradient-to-b from-cyan-900/20 to-transparent p-[1px] rounded-3xl">
      <div
        class="bg-[#0f0f12] rounded-[23px] overflow-hidden aspect-video relative border border-white/5 shadow-[0_0_100px_rgba(125,211,252,0.08)]"
      >
        <!-- Steam-style screenshot slideshow: crossfade between images from static/screenshots/ -->
        {#if screenshotSlides.length === 0}
          <div class="absolute inset-0 flex items-center justify-center text-gray-500">
            <span>Add images to <code class="text-cyan-400/80">static/screenshots/</code> and list them in the page script.</span>
          </div>
        {:else}
          {#each screenshotSlides as filename, i (filename)}
            <img
              src="/screenshots/{filename}"
              alt="Screenshot {i + 1}"
              class="absolute inset-0 w-full h-full object-contain transition-opacity duration-[1200ms] ease-in-out"
              style="opacity: {currentSlideIndex === i ? 1 : 0}; pointer-events: none;"
            />
          {/each}
          <!-- Dot indicators (Steam-style) -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {#each screenshotSlides as _filename, i}
              <button
                type="button"
                class="w-2 h-2 rounded-full transition-all duration-300 {currentSlideIndex === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}"
                aria-label="Go to slide {i + 1}"
                onclick={() => { currentSlideIndex = i; }}
              ></button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </section>

  <section
    id="features"
    class="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-8"
  >
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div
        class="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 text-2xl"
      >
        🗺️
      </div>
      <h3 class="text-xl font-bold mb-3">3D Map View</h3>
      <p class="text-gray-500 leading-relaxed">
        See all your accounts and their connections in an interactive 3D graph. Navigate and explore
        your digital footprint at a glance.
      </p>
    </div>
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div
        class="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-400 mb-6 text-2xl"
      >
        🔐
      </div>
      <h3 class="text-xl font-bold mb-3">Login Methods per Account</h3>
      <p class="text-gray-500 leading-relaxed">
        Manage how you sign in to each service—email, SSO, social login—and keep track of every
        account in one place.
      </p>
    </div>
    <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
      <div
        class="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6 text-2xl"
      >
        📋
      </div>
      <h3 class="text-xl font-bold mb-3">2D & List Views</h3>
      <p class="text-gray-500 leading-relaxed">
        Switch between 3D, 2D, and list views. View connections or browse accounts in a simple
        list—whatever works for you.
      </p>
    </div>
  </section>

  <footer class="border-t border-white/5 py-12 text-center text-gray-500 text-sm">
    <a href="https://github.com/{repo}" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-300 transition-colors">AccountMap</a>
    · <a href={demoUrl} target="_blank" rel="noopener noreferrer" class="hover:text-cyan-300 transition-colors">demo.accountmap.org</a>
    <br />
    &copy; 2026 AccountMap. Built with Svelte 5 & Tailwind v4.
  </footer>
</main>
