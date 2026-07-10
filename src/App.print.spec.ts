import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from './App.vue';

describe('App CV download behavior by language', () => {
  const getDownloadCvLink = (wrapper: ReturnType<typeof mount>) => wrapper.get('.hero__actions a');

  it('uses EN PDF when EN is selected by default', async () => {
    const wrapper = mount(App);
    const downloadLink = getDownloadCvLink(wrapper);

    expect(downloadLink.attributes('href')).toBe('/resume/Snehil_Belekar_CV.pdf');
    expect(downloadLink.attributes('target')).toBe('_blank');
    expect(downloadLink.attributes('rel')).toContain('noopener');
    expect(downloadLink.attributes('rel')).toContain('noreferrer');
  });

  it('uses FR PDF when FR is selected', async () => {
    const wrapper = mount(App);

    await wrapper.get('.lang-switcher').setValue('FR');
    const downloadLink = getDownloadCvLink(wrapper);

    expect(downloadLink.attributes('href')).toBe('/resume/Snehil_Belekar_CV_FR.pdf');
  });

  it('uses NL PDF when NL is selected', async () => {
    const wrapper = mount(App);

    await wrapper.get('.lang-switcher').setValue('NL');
    const downloadLink = getDownloadCvLink(wrapper);

    expect(downloadLink.attributes('href')).toBe('/resume/Snehil_Belekar_CV_NL.pdf');
  });
});
