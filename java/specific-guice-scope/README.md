### This is a demo project of specific guice scope [2015 year]

The application shows how you can create your specific scope using Google Guice Framework.

#### Use case example:

	@Provides
	@SpecificScope
	@Named("specific-scope-data")
	protected Map<String, String> getData() {
		return ImmutableMap.<String, String>builder()
				.put("resource-url", "http://resource.com")
				.build();
	}