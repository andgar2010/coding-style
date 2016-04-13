### An example of an application proxy.

The application allows you to create a local proxy server for local debugging web applications.

### Requirements:
Installation of the Java 6 or higher.

### Assembly and run:

	mvn.bat -f C:/sources/proxy/pom.xml -Dproxy.target=https://target.com -Denv.src.path=C:/sources/project -Denv.proxy.port=8090 -Dproxy.pattern=/api* -Dproxy.debug=true clean install

##### Features:

+ Ability to specify the debug mode (-Dproxy.debug)
+ Ability to specify REST-pattern (-Dproxy.pattern)
+ Ability to specify local server port (-Denv.proxy.port)
+ Ability to specify remote server (-Dproxy.target)
+ Ability to specify local web sources directory (-Denv.src.path)

