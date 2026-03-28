import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import '../assets/css/NewsSlider.css'

const newsData = [
  {
    id: 1,
    title: 'Managemen Pakan Ternak Saat Musim Hujan',
    date: '12 Maret 2024',
    image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=1000&auto=format&fit=crop',
    tag: 'Tips & Trik'
  },
  {
    id: 2,
    title: 'Keunggulan Domba Garut untuk Indukan',
    date: '10 Maret 2024',
    image: 'https://images.unsplash.com/photo-1490210219451-f761ac68a356?q=80&w=1000&auto=format&fit=crop',
    tag: 'Peternakan'
  },
  {
    id: 3,
    title: 'Optimalisasi Lahan Perkebunan Terintegrasi',
    date: '08 Maret 2024',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    tag: 'Inovasi'
  }
]

export default defineComponent({
  name: 'NewsSlider',
  setup() {
    const currentIndex = ref(0)
    let interval: number | null = null

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % newsData.length
    }

    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + newsData.length) % newsData.length
    }

    const goToSlide = (index: number) => {
      currentIndex.value = index
    }

    onMounted(() => {
      interval = window.setInterval(nextSlide, 5000)
    })

    onUnmounted(() => {
      if (interval) clearInterval(interval)
    })

    return () => (
      <div class="news-slider-wrapper position-relative w-100 h-100 overflow-hidden group">
        {/* Slides */}
        <div 
          class="news-slides-container d-flex w-100 h-100" 
          style={{ transform: `translateX(-${currentIndex.value * 100}%)` }}
        >
          {newsData.map((news) => (
            <div key={news.id} class="w-100 h-100 flex-shrink-0 position-relative">
              <img 
                src={news.image} 
                alt={news.title} 
                class="news-slide-img w-100 h-100 object-fit-cover"
              />
              {/* Overlay Content */}
              <div class="news-overlay position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
                <span class="news-tag d-inline-block px-3 py-1 text-white fw-bold text-uppercase mb-3 shadow-sm" style={{ backgroundColor: '#283618' }}>
                  {news.tag}
                </span>
                <h3 class="news-title text-white fw-bolder mb-2 lh-sm">
                  {news.title}
                </h3>
                <p class="news-date text-white-50 fw-medium m-0">
                  {news.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div class="news-dots position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2 mb-3 z-1">
          {newsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              class={["news-dot transition-all", currentIndex.value === index ? "news-dot-active" : ""]}
            />
          ))}
        </div>

        {/* Navigation Arrows (Desktop) */}
        <button 
          onClick={prevSlide}
          class="news-arrow news-arrow-prev position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center text-white transition-all border-0 group-hover-opacity"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button 
          onClick={nextSlide}
          class="news-arrow news-arrow-next position-absolute top-50 translate-middle-y d-flex align-items-center justify-content-center text-white transition-all border-0 group-hover-opacity"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    )
  }
})
