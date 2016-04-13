package com.omendba.email.html.postprocessor.visitor;

import com.omendba.email.html.postprocessor.ApplicationConfig;
import org.w3c.dom.Document;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
public class TitleVisitor extends AbstractDocumentVisitor {

	@Inject
	private ApplicationConfig applicationConfig;

	@Override
	public void visit(Document document) {
		getDocumentTagResolver()
				.getTitle(document)
				.setTextContent(applicationConfig.getTitle());
	}
}