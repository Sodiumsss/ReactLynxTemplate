import { i18n } from "./i18n.js";
import { useNavigate } from 'react-router';
import { useState } from '@lynx-js/react';
export function App() {
  const navigate = useNavigate();
  const [locale, setLocale] = useState('en');
  const getNextLocale = (locale: string) => {
    const locales = ["en", "zh"];
    const index = locales.indexOf(locale);
    return locales[(index + 1) % locales.length];
  };
  return (
    <page>
      <view className="flex flex-col justify-center items-center min-h-screen text-center gap-2">
        <text className="text-6xl font-bold leading-normal underline">
          {i18n.t('world')}
        </text>
        <text bindtap={async () => {
          const nextLocale = getNextLocale(locale);
          await i18n.changeLanguage(nextLocale);
          setLocale(nextLocale);
        }} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          {i18n.t('changeLanguage')}
        </text>
        <text className="bg-blue-500 text-white px-4 py-2 rounded-md" bindtap={() => {
          navigate('/home');
        }}>
          {i18n.t('jumpToHome')}
        </text>
      </view>
    </page>
  );
}