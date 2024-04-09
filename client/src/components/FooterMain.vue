<template>
  <div class="footer" id="contacts">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__content">
          <div class="footer__newsletter">
            <h3>{{ t('page.main.footer.newsletter.title') }}</h3>
            <div class="footer__newsletter-items">
              <div class="textInputWrapper">
                <input placeholder="Email" type="text" class="textInput" />
              </div>
              <Button class="btn btn--primary">{{ t('global.btn.subscribe') }}</Button>
            </div>
            <p>
              {{ t('page.main.footer.newsletter.desc') }}
            </p>
          </div>
          <div class="footer__links">
            <div class="footer__links-items">
              <h4>{{ t('page.main.footer.list.aboutUs.title') }}</h4>
              <ul>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.aboutUs.school') }}</a>
                </li>
                <li>
                  <router-view to="">{{ t('page.main.footer.list.aboutUs.java') }}</router-view>
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.aboutUs.dataAnalytics') }}</a>
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.aboutUs.python') }}</a>
                </li>
              </ul>
            </div>
            <div class="footer__links-items">
              <h4>{{ t('page.main.footer.list.help.title') }}</h4>
              <ul>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.help.ref') }}</a>
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.help.community') }}</a>
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.help.support') }}</a>
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.help.faq') }}</a>
                </li>
              </ul>
            </div>
            <div class="footer__links-items">
              <h4>{{ t('page.main.footer.list.contacts.title') }}</h4>
              <ul>
                <li><a href="#!">+7 700 066 68 28</a></li>
                <li><a href="mailto:admin@gasyr.com">admin@gasyr.com</a></li>
                <li>
                  <a target="_blank" href="https://go.2gis.com/5n782"
                    ><img width="20px" src="../assets/images/icons/location.svg" alt="location" />{{
                      t('page.main.footer.list.contacts.address')
                    }}</a
                  >
                </li>
                <li>
                  <a href="#!">{{ t('page.main.footer.list.contacts.info') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer__media">
          <h3>
            <img src="../assets/images/logo/Gasyr_logo.svg" alt="logo" />
            GasyrLab
          </h3>
          <div class="footer__socials">
            <ul class="social">
              <li class="social-item">
                <a
                  class="social-link"
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=77000666828&text&type=phone_number&app_absent=0"
                >
                  <img src="../assets/images/icons/whatsapp.svg" alt="wp" />
                </a>
              </li>
              <li class="social-item">
                <a
                  class="social-link"
                  target="_blank"
                  href="https://www.tiktok.com/@gasyrlab?_t=8lIaCDscbaf&_r=1"
                >
                  <img src="../assets/images/icons/tiktok.svg" alt="tiktok" />
                </a>
              </li>
              <li class="social-item">
                <a class="social-link" target="_blank" href="https://www.instagram.com/gasyrlab/">
                  <img src="../assets/images/icons/instagram.svg" alt="insta" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from './littleComponent/ButtonComponent.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/scss/abstracts' as abs;

.footer {
  background-color: #f2f2f2;
  padding-top: clamp(2.5rem, 1.136rem + 6.82vw, 6.25rem);
  .dark & {
    background-color: abs.$almost-black;
  }

  &__wrapper {
    height: auto;
    padding: 50px 0;
  }

  &__content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    border-bottom: 1px solid #c6c6c6;
    padding-bottom: 70px;

    @include abs.breakpoint('laptop-sm') {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
  }

  &__newsletter {
    max-width: 450px;
    h3 {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      margin-top: 20px;
      text-align: justify;
    }

    &-items {
      display: flex;
      align-items: center;
      gap: 20px;

      @include abs.breakpoint('mobile-lg') {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: clamp(3.125rem, 1.989rem + 5.68vw, 6.25rem);

    @include abs.breakpoint('laptop-sm') {
      // flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    &-items {
      text-align: center;
      h4 {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
        color: #945fff;
      }

      li {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          &:hover {
            text-decoration: underline;
            color: abs.$accent-color;
          }
        }

        img {
          .dark & {
            filter: invert(1);
          }
        }
      }
    }
  }

  &__media {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @include abs.breakpoint('tablet-xs') {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

    h3 {
      text-align: center;
      font-weight: 700;
      font-size: 30px;
      display: flex;
      align-items: center;
    }

    img {
      width: 70px;
    }
  }
}

.textInputWrapper {
  position: relative;
  width: 100%;
  margin: 12px 5px;
  --accent-color: #7b3ff2;
}

.textInputWrapper:before,
.textInputWrapper:after {
  content: '';
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
}

.textInputWrapper:before {
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(197, 197, 197, 0.42);
}

.textInputWrapper:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}

.textInputWrapper:after {
  content: '';
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}

.textInput::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(35, 35, 35, 0.582);

  .dark & {
    color: #fff;
  }
}

.textInputWrapper .textInput {
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: abs.$almost-white;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #1d1d1d;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
  .dark & {
    background-color: #272a2e;
    color: #fff;
  }
}

.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  outline: none;
}

.textInputWrapper:focus-within .textInput,
.textInputWrapper .textInput:focus,
.textInputWrapper .textInput:active {
  background-color: #f8f8f8;

  .dark & {
    background-color: #2c2e31;
  }
}

.textInputWrapper:focus-within .textInput::placeholder {
  opacity: 0;
}

.social {
  margin: 0;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.social .social-item {
  margin: 0 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.social .social-item .social-link {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  text-align: center;
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
  transition: all 0.4s ease;

  .dark & {
    background-color: #2b3035;
  }
}

.social-link {
  img {
    width: 28px;
  }
}

.social .social-item .social-link::before {
  content: '';
  position: absolute;
  top: 5px;
  left: -10px;
  height: 100%;
  width: 10px;
  background: #b1b1b1;
  transition: all 0.4s ease;
  transform: rotate(0deg) skewY(-45deg);

  .dark & {
    background-color: #393c3f;
  }
}

.social .social-item .social-link::after {
  content: '';
  position: absolute;
  top: 40px;
  left: -5px;
  height: 10px;
  width: 100%;
  background: #b1b1b1;
  transition: all 0.4s ease;
  transform: rotate(0deg) skewX(-45deg);

  .dark & {
    background-color: #393c3f;
  }
}

.social .social-item .social-link:hover {
  transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(5px, -5px);
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
}

.social .social-item:nth-child(1) a {
  color: #2ab540;
}

.social .social-item:nth-child(1):hover a {
  background: #2ab540;
}

.social .social-item:nth-child(1):hover a::before {
  background: #2e943d;
}

.social .social-item:nth-child(1):hover a::after {
  background: #2e943d;
}

.social .social-item:nth-child(2) a {
  color: #2d2d2d;
}

.social .social-item:nth-child(2):hover a {
  background: #555555;
}

.social .social-item:nth-child(2):hover a::before {
  background: #2d2d2d;
}

.social .social-item:nth-child(2):hover a::after {
  background: #2d2d2d;
}

.social .social-item:nth-child(3) a {
  color: #dd4b39;
}

.social .social-item:nth-child(3):hover a {
  background: #dd4b39;
}

.social .social-item:nth-child(3):hover a::before {
  background: #a2392b;
}

.social .social-item:nth-child(3):hover a::after {
  background: #a2392b;
}

.social .social-item .social-link:hover img {
  filter: brightness(0) saturate(100%) invert(100%) sepia(6%) saturate(13%) hue-rotate(200deg)
    brightness(102%) contrast(105%);
  transition: all 0.4s ease;
}
</style>
