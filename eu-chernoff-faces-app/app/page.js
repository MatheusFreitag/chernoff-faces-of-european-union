'use client';
import ChernoffMap from './components/ChernoffMap/ChernoffMap';
import ExamplesFrame from './components/ExamplesFrame/ExamplesFrame';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';
import BarChart from './components/Barchart/BarChart';
import styles from './page.module.css';
import Head from 'next/head';
import { globalState } from './components/constants';
import { useAppContext } from './contexts/appContext';
import Image from 'next/image';

export default function Home() {
  const { isModalVisible } = useAppContext();
  const facesCorruption = globalState.facesCorruption;
  const facesDrugs = globalState.facesDrugs;
  const facesHappiness = globalState.facesHappiness;
  const facesObesity = globalState.facesObesity;
  const facesSkin = globalState.facesSkin;

  return (
    <div className={styles.mainWrapper}>
      <Head>
        <title>(Chernoff) Faces of European Union</title>
        <meta name='description' content='EU Data mapped to Chernoff Faces' />

        <meta
          property='og:url'
          content='https://chernoff-faces-of-european-union.vercel.app/'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='(Chernoff) Faces of European Union'
        />
        <meta
          property='og:description'
          content='EU Data mapped to Chernoff Faces'
        />
        <meta
          property='og:image'
          content='https://raw.githubusercontent.com/MatheusFreitag/chernoff-faces-of-european-union/main/eu-chernoff-faces-app/public/og_image.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:domain'
          content='chernoff-faces-of-european-union.vercel.app'
        />
        <meta
          property='twitter:url'
          content='https://chernoff-faces-of-european-union.vercel.app/'
        />
        <meta
          name='twitter:title'
          content='(Chernoff) Faces of European Union'
        />
        <meta
          name='twitter:description'
          content='EU Data mapped to Chernoff Faces'
        />
        <meta
          name='twitter:image'
          content='https://raw.githubusercontent.com/MatheusFreitag/chernoff-faces-of-european-union/main/eu-chernoff-faces-app/public/og_image.png'
        />
      </Head>
      <main
        className={`${styles.main} ${isModalVisible ? styles.mainBlur : ''}`}
      >
        <h1 tabIndex={0} className={styles.title}>
          <span className={styles.smallTitle}>(Chernoff)</span>
          <br />
          Faces of <br />
          European Union <br />
          <span className={styles.subtitle}>An experiment</span>
        </h1>
        <p tabIndex={0} className={styles.authorName}>
          Written by Matheus Freitag
        </p>

        <p tabIndex={0} className={styles.regularText}>
          Let's start with the end! In this article, we will explore how humans
          are amazing at recognizing faces, specifically facial expressions, and
          how we can use this ability to quickly interpret multiple domains of
          data by turning them into a facial expression. Based on country-level
          data from the 27 EU countries, we will use this technique to
          algorithmically produce a facial expression for each nation. Further
          explanations are provided in the following sections. The end result of
          this experiment can be seen in the map below.
          <br />
          <b> Faces on the map are clickable.</b>
        </p>
        <ChernoffMap />

        <h2 tabIndex={0} className={styles.chapterTitle}>
          0. Context
        </h2>

        <p tabIndex={0} className={styles.regularText}>
          <i>Data</i>. One of the most trending words in modern times. If you
          ever dealt with data you probably realized that looking at tables full
          of number is not the most effective way to make sense of it. Humans,
          creative as we are, created a powerful concept to make data
          interpretation easier: <i>Data Visualization</i>.{' '}
        </p>
        <p tabIndex={0} className={styles.regularText}>
          {' '}
          Far from being a niche concept, data visualization examples like bar
          or line charts are massively broadcasted <i>daily</i> to a broad
          audience. Our capacity to abstract complex information into simple
          geometric elements like <i>bars</i> and <i>lines</i> is remarkable.
        </p>

        <div className={styles.imageContainer}>
          <BarChart />
        </div>
        <span tabIndex={0} className={styles.frameDescription}>
          Even without any labels we are capable of identifying groups, making
          comparisons, and creating assumptions. Abstracting data into simple
          geometric figures, in a meaningful way, is fascinating.
        </span>

        <br />
        <p tabIndex={0} className={styles.regularText}>
          We have good results when interpreting simple geometric forms, but
          there is something humans are naturally better at recognizing:{' '}
          <i>Faces</i>.
        </p>

        <h2 tabIndex={0} className={styles.chapterTitle}>
          1. Introduction
        </h2>
        <p tabIndex={0} className={styles.regularText}>
          Humans are amazing at recognizing faces. In fact, we are{' '}
          <i>so good</i> at it that we see faces even when there aren't any.{' '}
          <i>"Pareidolia"</i> is the name given to the tendency we have to see
          patterns in ambiguous locations.
        </p>
        <div tabIndex={0} className={styles.imageContainer}>
          <Image
            tabIndex={0}
            className={styles.containerImage}
            src='/martian_face.jpeg'
            alt='Sattelite picture of a rock formation in which the light and shadows mimic a face.'
            width={200}
            height={175}
          />
          <Image
            tabIndex={0}
            className={styles.containerImage}
            src='/plug.jpeg'
            alt='Front view of a Danish power plug. The socket arrangement mimics a face.'
            width={200}
            height={175}
          />
        </div>
        <span tabIndex={0} className={styles.frameDescription}>
          We can see faces everywhere! From rock formations on Mars to power
          plugs. Images by Wikimedia Foundation.
        </span>
        <br />
        <p tabIndex={0} className={styles.regularText}>
          Faces, and more in-depth, <i>facial expressions</i>, were a
          life-saving ability during our evolution, so it is understandable that
          we can, so intuitively and quickly, recognize those who are a threat,
          a friend, someone who needs help, all with a glimpse at their
          expressions. These insights were brought by Herman Chernoff, a
          statistician who proposed in 1973 the concept of <b>Chernoff Faces</b>
          . The <i>correct</i> way to explain Chernoff Faces is
          <span className={styles.cite}>
            a tool to display multivariate data in the shape of a human face
          </span>
          which can be interpreted by us as "a technique in which multiple data
          entries are used to build a human face." The intuition is to explore
          our ability to recognize facial expressions and use it as a way to
          quickly interpret multiple domains of data. Here is where I fell into
          the rabbit hole and started to think about how I can apply this
          "Chernoff Faces" technique to something meaningful for me and others.
        </p>

        <h2 tabIndex={0} className={styles.chapterTitle}>
          2. Motivation
        </h2>
        <p tabIndex={0} className={styles.regularText}>
          Geopolitics is a personal topic of interest, and like many others, I
          like to keep up on how different nations deal with challenges and
          realities. I do not recall any integration happening at the moment
          that is deeper than the one performed by the nations within the
          European Union, so it is natural to use this as the scenario for my
          experimentations with Chernoff Faces. Here, I gathered multiple data
          sources on the national level and created a script to procedurally
          create Chernoff Faces for each EU country. My expectation is to
          quickly identify how each nation is performing on multiple fronts by
          the facial expressions that represent such nations.
        </p>
        <h2 tabIndex={0} className={styles.chapterTitle}>
          3. Constraints
        </h2>
        <p tabIndex={0} className={styles.regularText}>
          We have from 20 to 43 muscles in the human face (depending on the
          source and how you count those muscles). It is challenging to add 20+
          attributes to a digital face, so in this context, a limited set of
          attributes was chosen: Eyebrows, nose, mouth, neck, and skin color.
          Eyebrows here can assume 3 different configurations, as well as mouth
          and skin color. Nose and neck can assume only 2 different
          configurations.
        </p>
        <p tabIndex={0} className={styles.regularText}>
          This small set of features and variations already allows for 108
          different facial outputs, and from examples online you can easily find
          projects with other attributes being used, like face shape, eye
          variations, and many others. And all this assumes the face is
          symmetrical. For asymmetrical faces, you could potentially double the
          possible outcomes.
        </p>
        <p tabIndex={0} className={styles.regularText}>
          Personally, <b>I think this is too much</b> because, in the end, you
          still need to keep a mental map of what each attribute symbolizes. Too
          many attributes will naturally lead to confusion and a loss of this
          technique's power: transmitting information easily and
          instantaneously. It's important to notice that some features are more
          representative than others; for example, eyebrows and smiles yield
          more information and are first perceived than slight tweaks in the
          shape of the nose.
        </p>
        <p tabIndex={0} className={styles.regularText}>
          For this experiment, the number of features and variations were
          explicitly limited to refrain from an explosion of possible outcomes,
          avoiding the overload of our mental map.
        </p>
        <h2 tabIndex={0} className={styles.chapterTitle}>
          4. Methodology
        </h2>
        <p tabIndex={0} className={styles.regularText}>
          Multiple data domains were gathered in order to form the Chernoff
          Faces representing each EU country. The sources for those datasets
          will be linked in the sections below. For all cases, the{' '}
          <a href='https://en.wikipedia.org/wiki/Quartile' target='_blank'>
            quartile
          </a>{' '}
          technique was used, separating the data points into 4 chunks with
          more-or-less equal sizes, where each chunk (or chunks) of data was
          (were) then mapped to a specific configuration of the face's
          attributes, as follows:
        </p>
        <h3 tabIndex={0} className={styles.chapterSubtitle}>
          4.1. Perceived Corruption as Eyebrows
        </h3>
        <p tabIndex={0} className={styles.regularText}>
          The{' '}
          <a href='https://ourworldindata.org/corruption' target='_blank'>
            "Perceived Corruption Index"
          </a>{' '}
          is a metric measured by the{' '}
          <a href='https://www.transparency.org/'>
            Transparency International NGO
          </a>{' '}
          widely used to measure the perceived corruption by the population. The
          index ranges from 0 to 100, where 0 means more corrupt, and 100 means
          not corrupt. For our Chernoff Faces, data was divided into its four
          quartiles.
        </p>
        <p tabIndex={0} className={styles.regularText}>
          Countries with perceived corruption index values below the 1st
          quartile receive a <i>Relaxed Eyebrow</i>, representing the least
          corrupted countries (as perceived by the population). Between the 1st
          and 3rd quartile, a <i>Neutral Eyebrow</i> is given. Finally, above
          the 3rd quartile, an <i>Angry Eyebrow</i> is assigned, indicating a
          high corruption index.
        </p>
        <ExamplesFrame
          numberOfExamples={3}
          faces={facesCorruption}
          legend={
            'The 3 different variations possible for eyebrows, indicating how corrupt countries are perceived by their citizens.'
          }
          facesLabel0={'Low Corruption Perception'}
          facesLabel1={'Medium Corruption Perception'}
          facesLabel2={'High Corruption Perception'}
        />
        <h3 tabIndex={0} className={styles.chapterSubtitle}>
          4.2. Cocaine-related Death Rate as Nose
        </h3>
        <p tabIndex={0} className={styles.regularText}>
          The European Union has public data on
          <a
            href='https://ourworldindata.org/grapher/death-rates-cocaine?region=Europe'
            target='_blank'
          >
            "Cocaine death rates"
          </a>{' '}
          per 100,000 inhabitants. In this experiment, data was split into two
          quartiles, with the first quartile being mapped to a smaller nose,
          while the second quartile was mapped to a bigger nose.
        </p>

        <ExamplesFrame
          numberOfExamples={2}
          faces={facesDrugs}
          legend={
            'The 2 different variations possible for the nose, indicating death rate caused by cocaine abuse.'
          }
          facesLabel0={
            <span>
              Low-Medium <br /> Cocaine death rate
            </span>
          }
          facesLabel1={
            <span>
              Medium-High <br /> Cocaine death rate
            </span>
          }
          facesLabel2={''}
        />
        <h3 tabIndex={0} className={styles.chapterSubtitle}>
          4.3. Happiness Index as Mouth
        </h3>
        <p tabIndex={0} className={styles.regularText}>
          The World Happiness Report is a well-known source of cross-country
          data and research on self-reported life satisfaction. The concept
          behind this measurement is called the{' '}
          <a
            href='https://en.wikipedia.org/wiki/Happiness#Measurement'
            target='_blank'
          >
            Cantril Ladder
          </a>
          index to evaluate how{' '}
          <a
            href='https://ourworldindata.org/happiness-and-life-satisfaction'
            target='_blank'
          >
            happy citizens consider themselves to be
          </a>
          . If you imagine a ladder with steps numbered from 0 at the bottom to
          10 at the top, you can see it as 10 being you in your best life
          possible, and 0 being your worst outcome.
        </p>
        <p tabIndex={0} className={styles.regularText}>
          Based on each country's self-report, a smile was introduced to the
          face. The smile is happy for countries with a high happiness index. A
          neutral smile is given to countries with a medium happiness index, and
          a sad mouth is given to countries with a low happiness index.
        </p>

        <ExamplesFrame
          numberOfExamples={3}
          faces={facesHappiness}
          legend={
            'The 3 different variations possible for the smile, indicating how happy countries see themselves.'
          }
          facesLabel0={
            <span>
              Low <br /> Happiness Index
            </span>
          }
          facesLabel1={
            <span>
              Medium <br /> Happiness Index
            </span>
          }
          facesLabel2={
            <span>
              High <br /> Happiness Index
            </span>
          }
        />
        <h3 tabIndex={0} className={styles.chapterSubtitle}>
          4.4. Obesity Index as Neck
        </h3>
        <p tabIndex={0} className={styles.regularText}>
          The World Health Organization provides data on{' '}
          <a
            href='https://ourworldindata.org/grapher/share-of-adults-defined-as-obese?region=Europe'
            target='_blank'
          >
            worldwide obesity index among the population
          </a>
          , measured as a percentage of the overall population. For this
          project, data on EU countries were gathered and split into two
          quartiles, with the first quartile being mapped to an absent neck,
          while the second quartile was mapped to a prominent neck.
        </p>
        <ExamplesFrame
          numberOfExamples={2}
          faces={facesObesity}
          legend={
            'The 2 different variations possible for the neck, indicating obesity index in the country.'
          }
          facesLabel0={
            <span>
              Low-Medium <br /> Obesity Index
            </span>
          }
          facesLabel1={
            <span>
              Medium-High <br /> Obesity Index
            </span>
          }
          facesLabel2={''}
        />
        <h3 tabIndex={0} className={styles.chapterSubtitle}>
          4.5. UV Exposure as Skin
        </h3>
        <p tabIndex={0} className={styles.regularText}>
          The World Health Organization also provides data on the average UV
          Radiation daily exposure in each country, measured in J/m². For this
          project, data on EU countries were gathered and split into three
          quartiles. Countries with an exposure lower than the value for the
          first quartile received a lighter skin tone. Countries with exposure
          between the 1st and 3rd quartiles received an in-between skin tone.
          Countries above the 3rd quartile, which means they receive more UV
          exposure on average, received a darker skin color.
        </p>
        <ExamplesFrame
          numberOfExamples={3}
          faces={facesSkin}
          legend={
            'The 3 different variations possible for the skin tone, indicating the exposure to UV Radiation daily.'
          }
          facesLabel0={
            <span>
              Low <br /> UV Exposure
            </span>
          }
          facesLabel1={
            <span>
              Medium <br /> UV Exposure
            </span>
          }
          facesLabel2={
            <span>
              High <br /> UV Exposure
            </span>
          }
        />

        <h2 tabIndex={0} className={styles.chapterTitle}>
          5. Conclusion
        </h2>
        <p tabIndex={0} className={styles.regularText}>
          It is fascinating how fast we can perceive a facial expression, and
          generating faces to communicate data is a powerful tool that I plan to
          explore more. During this project, some key constraints evolved:
        </p>
        <ul>
          <li tabIndex={0}>
            It is all about the mental map. Each extra attribute, and each
            variation of this attribute, creates stress on the amount of
            information a user needs to keep in their minds. Be mindful of which
            attributes you want to choose.
          </li>
          <li tabIndex={0}>
            Try to map meaningful data to equivalent facial attributes. UV
            radiation is well known to tan human skin, so it is logical to use
            this data to lighten or darken the skin tone. The same can be said
            about obesity and neck prominence, or happiness and smiles.
          </li>
          <li tabIndex={0}>
            From a UX perspective, if you display a map with Chernoff Faces,
            even with intuitive attributes, it is interesting to offer the
            option to check what each attribute means.
          </li>
        </ul>
        <p tabIndex={0} className={styles.regularText}>
          The result, with each EU country holding its own Chernoff Face, can be
          seen in the <b>Result</b> section at the top of this page.
        </p>
        <Footer />
      </main>
      <Modal
        externalClasses={isModalVisible ? 'modalVisible' : 'modalHidden'}
      />
    </div>
  );
}
