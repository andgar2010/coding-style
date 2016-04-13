package com.omendba.email.html.postprocessor.visitor;

import com.google.common.base.Function;
import com.omendba.email.html.postprocessor.support.StringCleaner;

import javax.inject.Singleton;

@Singleton
public class StringCleanerFunction implements Function<String, String> {

	@Override
	public String apply(String from) {
		return StringCleaner.clean(from);
	}
}