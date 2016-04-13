package com.omendba.email.html.postprocessor.xsd;

import com.google.inject.Provider;

import javax.inject.Singleton;

import static com.omendba.email.html.postprocessor.ResourceFactory.HTML_ATTRIBUTES;

@Singleton
public class HtmlAttributesTypeProvider implements Provider<HtmlAttributesType> {

	@Override
	public HtmlAttributesType get() {
		return JAXBSupport.unmarshal(HTML_ATTRIBUTES, HtmlAttributesType.class);
	}
}