package org.opendolphin.gradle

import org.gradle.api.DefaultTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.OutputDirectory
import org.gradle.api.tasks.TaskAction

public class GulpTask extends DefaultTask {

	@Input
	List<String> commands

	@OutputDirectory
	File destinationDir = new File('gulp_out')

	GulpTask() {
		destinationDir = new File('gulp_out')
		println destinationDir.absolutePath
	}

	@TaskAction
	void callGulp() {
		project.exec {
			executable 'node'
			isWindows() ? args [$/.\node_modules\gulp\bin\gulp.js/$] + commands : args ['./node_modules/gulp/bin/gulp.js'] + commands
		}
	}

	boolean isWindows() {
		System.properties['os.name'].toLowerCase().contains('windows')
	}
}