import { SelectOption } from '@/core';

const countries = reactive<any[]>([]);

export const useGlobal = () => {
  const { locale, t } = useI18n();
  const { custom } = useAPI();

  // Countries
  // const countriesOptions = async (): Promise<SelectOption[]> => {
  //   if (countries.length === 0) {
  //     const data = await custom.fetch({
  //       body: {
  //         url: 'datatable/country/list',
  //         offset: 0,
  //         count: 1000,
  //         lang: locale.value,
  //       },
  //     });

  //     countries.push(...data.results);
  //   }

  //   return countries.map((country) => ({
  //     label: country.app_country_name,
  //     value: country.app_country_iso,
  //   }));
  // };

  // const countriesRefresh = () => {
  //   countries.splice(0, countries.length);
  // };

  // return {
  //   countriesOptions,
  //   countriesRefresh,
  // };
};
