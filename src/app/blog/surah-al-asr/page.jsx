import PageIntro from "@/components/PageIntro";
import React from "react";
import Quotations from "@/components/Quotations";

export const metadata = {
  title: "Reflections on Surah Al-Asr",
  description: "Embracing the Gift of Time",
  alternates: {
    canonical: "https://rahmacc.com/blog/surah-al-asr",
  },
};

const SurahAlAsrPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Quranic Reflections"
        title="Reflections on Surah Al-Asr: Embracing the Gift of Time"
      />

      <div className="mx-auto text-gray-900 max-w-7xl px-6 lg:px-8 mt-8 prose prose-lg prose-indigo">
        <p className="lead">
          In the name of Allah, the Most Gracious, the Most Merciful.
          Every day, we are gifted with the most precious resource – time. Surah Al-Asr, though brief, is a timeless reminder of our responsibilities in this fleeting world. As I reflect upon its verses, I find that this Surah is not just a recitation; it is a roadmap for our journey toward a fulfilling, purposeful life.
        </p>

        <Quotations
            className="mt-8 sm:mt-8 lg:mt-8"
            title="Quran (Surah al-Asr), 103:1-3"
            showImage={false}
            >
            By time, Indeed, mankind is in loss, Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.
         </Quotations>

        <h2 className="font-display text-base font-semibold text-neutral-950 mt-12 mb-6">The Essence of Time</h2>
        <p>
          The Surah begins with the powerful oath, &quot;By time,&quot; reminding us that every second is a divine trust. Time is not merely a sequence of moments; it is the very fabric of our existence. Allah, in His infinite wisdom, has woven time into our lives as both a challenge and an opportunity. Each tick of the clock is an invitation to rise above our worldly distractions and to invest in what truly matters.
        </p>

        <h2 className="font-display text-base font-semibold text-neutral-950 mt-12 mb-6">Recognizing Our Loss Without Faith and Deeds</h2>
        <p>
          The following verse declares, &quot;Indeed, mankind is in loss.&quot; This statement is a wake-up call. It gently warns us that unless we seize the moment, our lives may slip away in regret and unfulfilled potential. Loss, in this context, is not about material failure but about missing out on the chance to engage our hearts and minds in acts of faith, compassion, and self-improvement.
        </p>

        <h2 className="font-display text-base font-semibold text-neutral-950 mt-12 mb-6">The Four Pillars of Success</h2>
        <p>
          Surah Al-Asr outlines the way to avoid this loss through four interlinked pillars:
        </p>
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700">Belief (Iman)</h3>
            <p>
              True success begins with a deep, unwavering belief in Allah. Iman anchors our hearts and directs our actions. It is the foundation upon which every righteous deed is built.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700">Righteous Deeds (Amal Saleh)</h3>
            <p>
              Belief without action is like a tree without roots. Our daily actions, no matter how small, should reflect the light of our faith. Whether it is through acts of charity, kindness to our family and neighbors, or simply striving to better ourselves, every deed matters in the sight of Allah.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700">Mutual Enjoining of Truth (Tawasaw bil-Haqq)</h3>
            <p>
              We are not solitary beings on this journey. The strength of our community lies in our willingness to remind and support one another in the pursuit of truth. Sharing knowledge, offering sincere advice, and holding each other accountable in a spirit of brotherhood and sisterhood are vital.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-indigo-700">Mutual Enjoining of Patience (Tawasaw bis-Sabr)</h3>
            <p>
              Life is filled with trials, and the path to success is rarely smooth. Patience is not passive endurance; it is an active commitment to persevere through adversity with a calm and steadfast heart. It is the quality that transforms obstacles into stepping stones towards our ultimate goal.
            </p>
          </div>
        </div>

        <h2 className="font-display text-base font-semibold text-neutral-950 mt-12 mb-6">The Relevance in Our Daily Lives</h2>
        <p>
          In today&apos;s fast-paced world, where the lure of distractions is omnipresent, the lessons of Surah Al-Asr resonate even more. We often find ourselves caught up in the rush of daily tasks, neglecting the deeper purpose of our existence. This Surah reminds us to pause, reflect, and realign our priorities:
        </p>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-slate-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700">Mindful Living</h3>
            <p>Every moment is a chance to connect with Allah through prayer, remembrance, and gratitude. Setting aside time for reflection can transform even the busiest days into opportunities for spiritual growth.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700">Community and Compassion</h3>
            <p>In our interactions, let us strive to be sources of truth and patience. By nurturing our relationships and supporting one another, we create a society that reflects the divine values of justice, mercy, and kindness.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-700">Personal Accountability</h3>
            <p>The call to righteous deeds challenges us to evaluate our daily choices. Are we investing our time in pursuits that benefit not only ourselves but also our communities? Each small act of goodness contributes to a legacy of faith and hope.</p>
          </div>
        </div>

        <h2 className="font-display text-base font-semibold text-neutral-950 mt-12 mb-6">Concluding Reflections</h2>
        <p>
          Surah Al-Asr is a profound reminder that time is both a gift and a test. It urges us to awaken from the slumber of complacency and to live our lives with purpose, sincerity, and gratitude. As we navigate the complexities of modern life, let us hold fast to the pillars of faith, righteous deeds, truth, and patience. In doing so, we honor the divine message and create a legacy that transcends this fleeting world.
        </p>
        <blockquote className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500 my-8">
          <p className="italic">
            May Allah grant us the wisdom to appreciate every moment, the strength to act upon our beliefs, and the unity to support each other in our journey towards His eternal mercy. Ameen.
          </p>
        </blockquote>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 italic">
            This article was contributed by an anonymous Rahma community member from Mill Creek, WA.
          </p>
        </div>
      </div>
    </>
  );
};

export default SurahAlAsrPage;