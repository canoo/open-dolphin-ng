package org.opendolphin.gradle

import org.gradle.api.DefaultTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.TaskAction

public class GulpTask extends DefaultTask {

	@Input
	List<String> commands

	@TaskAction
	void callGulp() {
		project.exec {
			executable isWindows() ? 'gulp.cmd' : 'gulp'
			args commands
		}
	}

	boolean isWindows() {
		System.properties['os.name'].toLowerCase().contains('windows')
	}
}