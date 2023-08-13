---
title: "Cloud-Based Automation Using BrowserStack and Selenium in Python"
thumbnail: "https://miro.medium.com/max/1920/1*D6RVA5hO6-SKAeTSqD0Kzw.png"
date: "3 Aug, 2020"
author:
  name: "Suryansh Singh"
  avatar: "https://miro.medium.com/fit/c/48/48/1*zOruNXjx3bYUi6ozXvqw1g.png"
tags: ["Python", "Selenium", "Testing", "Automation", "Webdriver"]
---

_An introduction to cloud-based testing on BrowserStack using Selenium in Python._

![](https://miro.medium.com/max/3840/1*D6RVA5hO6-SKAeTSqD0Kzw.png)

An introduction to cloud-based testing on BrowserStack using Selenium in Python. **Selenium** is a library that enables the automation of web browsers. Testing web applications is its most popular use. At the heart of Selenium lies the _Selenium WebDriver_. _WebDriver_ uses browser automation APIs to control the browser and run tests. This feature empowers the automation of a browser. You can use these features to automate most of your boring stuff online, such as applying to multiple jobs on _LinkedIn_ and _AngelList_.

This article is about using Selenium (Python) to automate a form-filling process, i.e., filling a form multiple times. After that, we step things up a notch using **BrowserStack** to take this automation process to the cloud. **BrowserStack** is a cloud web and mobile testing platform that lets developers access browsers on-demand for their testing needs.

Cloud-based automation and testing have several benefits. It offers better collaboration, quicker and cost-effective testing, unlimited availability, and some significant advantages like customisation, parallelisation and support for agile workflows.

For this article, we will be using a sample Google [form.](https://forms.gle/TPEZU34eVapj7CmGA)

The first and the most obvious step would be to install Selenium on your system by using the following command in your terminal:

```bash
sudo pip3 install selenium
```

The next step would be to create a BrowserStack account (If you have one already, then that’s great). BrowserStack’s Automate Mobile Plan for one parallel and one user for one year is free for students through the [Github Student Developer Pack](https://education.github.com/pack).

You would then need to head to this [page](https://www.browserstack.com/automate/python) on BrowserStack’s website. Here you can select the browser and OS combination of your preference. After you’ve chosen your choice, you would then need to create a new .py file on your system in a code editor. Let’s say you wish to perform this test on _Chrome 84 Browser on Mac OS X Catalina_. So you should write down the following code in your .py file:

```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import time

desired_cap = {
'browser': 'Chrome',
'browser_version': '84.0 beta',
'os': 'OS X',
'os_version': 'Catalina',
'resolution': '1024x768',
'name': 'Bstack-[Python] Sample Test'
}

driver = webdriver.Remote(command_executor='Your unique BrowserStack Access Key link', desired_capabilities=desired_cap)
```

The first four lines of the code specify the imported libraries. The time library will be used later on in the project. The desired cap dictionary specifies the specifications of the OS and Browser you want to use. The next statement ( _webdriver.Remote()_ ) connects the program to the BrowserStack’s system. The unique string to be passed to the _command_executor_ parameter would be found on this [page](https://www.browserstack.com/automate/python) when you select your Browser and OS preference. The access key is unique to each BrowserStack user, and so is the link.

After this, you need to add the following python code to your .py file.

```python
driver.get('https://forms.gle/xX5NEumdXW4Z7SrC6')
```

The _driver.get()_ statement will open the link provided in the browser. The screenshot of the form is attached below.

![](https://miro.medium.com/max/675/1*DTbpl7VItaKYMNS8cjwZSA.png)

Now your next step would be to select the correct options for each of the questions/fields. There are several ways to do this, but let’s say you use the XPath to choose your desired option. For this, you need to hover over to the option of your choice and press the mouse’ right-click over the radio button/checkbox. Then you would need to select the _inspect_ option. When you right-click on the highlighted element inside the new pane on the right, you would be able to copy the XPath, as shown in the picture below.

![](https://miro.medium.com/max/3442/1*gRVUi3Qe13cor9Mc1qkW7A.png)

This process works for multiple-choice, text, and checkbox fields. Now you can paste the XPath in the .py file in the form a string as shown below. You would also need the XPath of the _Submit_ button and _Submit another response_ (resubmit) button. The resubmit button makes automation more accessible.

```python
radioOption3 ='//*[@id="mG61Hd"]/div[2]/div/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[3]/label/div/div[1]/div/div[3]'
checkBox2 = '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div[1]/div[2]/label/div/div[1]/div[2]'
checkBox3 = '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div[1]/div[3]/label/div/div[1]/div[2]'
text = '//*[@id="mG61Hd"]/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[1]/input'
submit = '//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div/div/span/span'

resubmit = '/html/body/div[1]/div[2]/div[1]/div/div[4]/a'
```

Now, you are left with the final step, implementing the loop for automation. Let’s say you want to fill the form 100 times. So you run a _while_ loop 100 times, incrementing variable _i_ each time. Inside the _while_ loop, you use _find_element_by_xpath_ and _click()_ attribute to implement your functionality. For the text field, the _send_keys_ method does the job. The _time.sleep(1)_ waits for 1 second after submitting the form to avoid any unwanted error. The following code uses _try_ and _except_ for the same purpose (as a precaution). If there is no error, the tool will go on to submit another response in the same window. If any statement generates an error, it will close that window, and start with a new one. The _driver.quit()_ statement at the end stops/completes the process of automation.

```python
i=0
while i<100:
	driver.find_element_by_xpath(radioOption3).click()
	driver.find_element_by_xpath(checkBox2).click()
	driver.find_element_by_xpath(checkBox3).click()
	text_box=driver.find_element_by_xpath(text)
	text_box.send_keys("The text I need")
	driver.find_element_by_xpath(submit).click()
	i=i+1
	time.sleep(1)
	try:
		driver.find_element_by_xpath(resubmit).click()
	except:
		driver.close()
		driver = webdriver.Remote(command_executor='Your unique BrowserStack link',desired_capabilities=desired_cap)
		driver.get('https://forms.gle/xX5NEumdXW4Z7SrC6')
driver.quit()
```

Now all you need to do is go to your terminal and use the following command to run the program.

```bash
python3 filename.py
```

Now you can move to your BrowserStack Dashboard and see your program fill the form 100 times.

Selenium is a powerful tool. The code is easy to implement, and it makes testing and automation a lot easier. BrowserStack provides an easy-to-use powerful interface which makes cloud-based testing a lot easier.
