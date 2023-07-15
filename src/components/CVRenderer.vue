<template>
  <div id="cv" :class="{ blackAndWhite }">
    <div id="cv-header" :class="{ blackAndWhite }">
      <div class="headline">
        <div class="title">
          {{ data.headline.name }} <span class="pronouns">{{ data.headline.pronouns }}</span>
        </div>
        <div class="subtitle">
          {{ data.headline.subtitle }}
        </div>
      </div>
      <div class="contact-details">
        <div v-for="{ name, icon, value } of data.contact" :key="name" class="contact-details-item">
          {{ value }}
          <AppIcon :icon="icon" />
        </div>
      </div>
    </div>
    <div id="cv-body">
      <div class="about-me">
        <h1>{{ data.aboutMe.title }}</h1>
        <p class="content" contenteditable>
          {{ data.aboutMe.content }}
        </p>
      </div>
      <div class="skills">
        <h1 class="title">
          {{ data.skills.title }}
        </h1>
        <div class="top-skills">
          <div v-for="{ name, logoUrl } of data.skills.topSkills" :key="name" class="top-skill">
            <img :src="logoUrl" class="top-skill-logo" :alt="name">
            {{ name }}
          </div>
        </div>
        <div class="other-skills">
          <VChip v-for="skill of data.skills.otherSkills" :key="skill" variant="text" class="primary-chip other-skill">
            {{ skill }}
          </VChip>
        </div>
      </div>
      <div class="i18n">
        <h1>{{ data.languages.title }}</h1>
        <div class="items">
          <VChip v-for="item of data.languages.items" :key="item" variant="text" class="primary-chip item">
            {{ item }}
          </VChip>
        </div>
      </div>
      <div class="education">
        <h1 class="title">
          {{ data.education.title }}
        </h1>
        <div
          v-for="{ id, institutionName, courseName, degree, startDate, endDate, logoUrl } of data.education.items"
          :key="id" class="education-entry"
        >
          <div class="dates-range">
            <div class="start">
              <div class="month">
                {{ getMonth(startDate) }}
              </div>
              <div class="year">
                {{ getYear(startDate) }}
              </div>
            </div>
            <div class="end">
              <div class="month">
                {{ getMonth(endDate) }}
              </div>
              <div class="year">
                {{ getYear(endDate) }}
              </div>
            </div>
          </div>
          <div class="timeline" />
          <div class="content">
            <h2 class="institution">
              {{ institutionName }}
            </h2>
            <div class="course">
              {{ courseName }}
            </div>
            <div class="degree">
              <AppIcon icon="school" />
              {{ degree }}
            </div>
          </div>
          <img :src="logoUrl" class="education-logo" :alt="institutionName">
        </div>
      </div>
      <div class="experience">
        <h1>{{ data.experience.title }}</h1>
        <div
          v-for="{ id, name, position, duties, startDate, endDate, logoUrl } of data.experience.items" :key="id"
          class="experience-entry"
        >
          <div class="dates-range">
            <div class="start">
              <div class="month">
                {{ getMonth(startDate) }}
              </div>
              <div class="year">
                {{ getYear(startDate) }}
              </div>
            </div>
            <div class="end">
              <div class="month">
                {{ getMonth(endDate) }}
              </div>
              <div class="year">
                {{ getYear(endDate) }}
              </div>
            </div>
          </div>
          <div class="timeline" />
          <div class="content">
            <div class="top">
              <div class="left">
                <h2 class="position">
                  {{ position }}
                </h2>
                <div class="name">
                  {{ name }}
                </div>
                <div class="length">
                  <AppIcon icon="schedule" />
                  {{ getLength(startDate, endDate) }}
                </div>
              </div>
              <img :src="logoUrl" :alt="name" class="experience-item-logo">
            </div>
            <div class="duties">
              <div v-for="duty of duties" :key="duty" class="duty">
                {{ duty }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-scriptum">
        {{ data.postScriptum }}
      </div>
      <div class="projects-reference-info">
        <AppIcon icon="info" />
        {{ data.projectsReferenceInfo.label }}
        <a :href="data.projectsReferenceInfo.url">{{ data.projectsReferenceInfo.urlLabel }}</a>
      </div>
    </div>
    <div v-if="data.footer" id="cv-footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { DateTime } from 'luxon'
import type { CVData } from '~/Data'

// TODO: Fix PDF generation

const props = defineProps({
  data: {
    type: Object as PropType<CVData>,
    required: true,
  },
  blackAndWhite: Boolean,
})

// const emit = defineEmits({})

const getMonth = (date: string) => DateTime.fromISO(date).get('monthShort')
const getYear = (date: string) => DateTime.fromISO(date).get('year')

function getLength(startDate: string, endDate: string) {
  const start = DateTime.fromISO(startDate)
  const end = DateTime.fromISO(endDate)

  const diff = end.diff(start, ['years', 'months'])

  return diff.toHuman({ listStyle: 'long', maximumFractionDigits: 0 })
}
</script>

<style lang="scss" scoped>
#cv {
  aspect-ratio: 1/1.4142;
  background-color: white;
  color: black;
  width: 21cm;
  min-width: 21cm;
  max-width: 21cm;
  height: 29.7cm;
  min-height: 29.7cm;
  max-height: 29.7cm;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  --safeprint-margin: 3rem;
  --cv-color-primary: #8ea5da;
  --cv-color-primary-rgb: 112, 245, 255;
  --cv-color-heading: #002022;
  --cv-color-heading-rgb: 0, 32, 34;
  --cv-chip-color: rgba(73, 219, 218, 0.2);
  * {
    transition: background 0.2s ease, color 0.2s ease;
  }

  &.blackAndWhite {
    --cv-color-primary: #B2B2B2;
    --cv-color-primary-rgb: 0, 0, 0;
    --cv-color-heading: #000;
    --cv-color-heading-rgb: 0, 0, 0;
    --cv-chip-color: rgba(0, 0, 0, 0.1);
    img {
      filter: grayscale(1);
    }
  }

  --cv-timeline-width: 4px;

  a {
    text-decoration: none;
    color: black;
    opacity: 0.7;
  }

  h1 {
    font-size: 1.5em;
    color: var(--md-sys-color-background);
  }

  #cv-header {
    padding: var(--safeprint-margin);
    display: flex;
    gap: 1em;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(150deg, rgba(0, 255, 206, 0.8) 0%, rgba(121, 126, 247, 0.8) 100%);
    color: var(--cv-color-heading);
    margin: 1rem;
    border-radius: 2.5rem;

    &.blackAndWhite {
      background: rgba(0, 0, 0, 0.1);
    }

    .headline {
      .title {
        font-size: 3.5em;
        font-weight: 800;

        .pronouns {
          font-size: 0.6em;
          opacity: 0.5;
        }
      }

      .subtitle {
        font-size: 1.5em;
        font-weight: 600;
        opacity: 0.7;
      }
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1em;

      .contact-details-item {
        display: flex;
        gap: 1em;
        align-items: center;
        font-weight: 500;
        font-size: 1.1em;
      }
    }
  }

  #cv-body {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1rem var(--safeprint-margin);
    height: 50rem;
    gap: 2rem;

    >* {
      max-width: calc(calc(100% - 2rem) / 2)
    }

    .about-me {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .content {
        white-space: pre-wrap;
      }
    }

    .experience {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .experience-entry {
        display: flex;
        gap: 1em;

        .content {
          display: flex;
          flex-direction: column;
          gap: 1em;
          flex: 1;

          .top {
            display: flex;
            gap: 1em;
            justify-content: space-between;

            .left {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 0.1em;

              .position {}

              .name {}

              .length {
                display: flex;
                gap: 0.5em;
                align-items: center;
                font-size: 0.9em;
              }
            }

            .experience-item-logo {
              max-width: 3em;
            }
          }

          .duties {
            padding-bottom: 1.5em;
            display: flex;
            flex-direction: column;
            gap: 1em;

            .duty {
              display: flex;
              gap: 0.5rem;
              margin-left: calc(-1rem + 0.5px);

              &:before {
                content: "";
                display: block;
                width: 12px;
                height: 12px;
                min-width: 12px;
                min-height: 12px;
                translate: -50%;
                aspect-ratio: 1;
                background-color: var(--cv-color-primary);
                border-radius: 100%;
                border: 1px solid white;
                margin-top: 0.45em;
              }
            }
          }
        }
      }
    }

    .skills {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .title {}

      .top-skills {
        display: flex;
        gap: 1em;
        align-items: flex-end;
        justify-content: space-evenly;
        padding: 1em 0;

        .top-skill {
          display: flex;
          flex-direction: column;
          gap: 1em;
          align-items: center;
          font-weight: 600;

          .top-skill-logo {
            height: 3em;
          }
        }
      }

      .other-skills {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
      }
    }

    .education {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .title {}

      .education-entry {
        display: flex;
        gap: 1em;
        justify-content: space-between;

        .education-logo {
          max-width: 3em;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 0.2em;
          padding-top: 0.5em;
          padding-bottom: 1em;

          .institution {
            font-size: 1.2rem;
          }

          .course {
            font-size: 1.1em;
          }

          .degree {
            display: flex;
            gap: 0.5em;
            align-items: center;
          }
        }
      }
    }

    .projects-reference-info {
      display: flex;
      gap: 0.5em;
      align-items: center;
      font-weight: 600;
      background-color: rgba(var(--cv-color-primary-rgb), 0.2);
      color: var(--cv-color-heading);
      padding: 1em;
      border-radius: 2em;
    }

    .i18n {
      display: flex;
      gap: 1em;
      align-items: center;

      .items {
        display: flex;
        gap: 1em;
        align-items: center;
      }
    }
  }

  #cv-footer {
    text-align: center;
    padding: 1em var(--safeprint-margin);
    font-weight: 600;
    font-size: 1.2em;
  }
}

.dates-range {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .start,
  .end {
    text-align: right;

    .month {
      font-size: 0.9em;
    }

    .year {}
  }
}

.timeline {
  width: var(--cv-timeline-width);
  background-color: var(--cv-color-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before,
  &:after {
    content: "";
    background-color: var(--cv-color-primary);
    display: block;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    translate: -50%;
    margin-top: -1px;
    margin-left: 2px;
  }
}

.primary-chip {
  background-color: var(--cv-chip-color);
  color: var(--cv-color-heading);
}
</style>
