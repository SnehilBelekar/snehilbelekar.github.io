import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, afterEach } from 'vitest';
import App from './App.vue';

describe('App print behavior by language', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('opens EN PDF instead of browser print when EN is selected', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => window as Window);
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    const wrapper = mount(App);

    // EN is selected by default, so clicking print should open the PDF.
    await wrapper.get('.print-btn').trigger('click');

    expect(openSpy).toHaveBeenCalledWith('/resume/Snehil_Belekar_CV.pdf', '_blank', 'noopener,noreferrer');
    expect(printSpy).not.toHaveBeenCalled();
  });

  it('uses browser print for non-EN languages', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => window as Window);
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});

    const wrapper = mount(App);

    await wrapper.get('.lang-switcher').setValue('FR');
    await wrapper.get('.print-btn').trigger('click');

    expect(printSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).not.toHaveBeenCalled();
  });
});
