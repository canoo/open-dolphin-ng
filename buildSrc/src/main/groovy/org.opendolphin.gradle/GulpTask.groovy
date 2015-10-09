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
		def arguments = isWindows() ? [$/.\node_modules\gulp\bin\gulp.js/$] + commands : ['./node_modules/gulp/bin/gulp.js'] + commands
		logger.info "calling node.js: node $arguments"
		project.exec {
			executable 'node'
			args arguments
		}
	}

	boolean isWindows() {
		System.properties['os.name'].toLowerCase().contains('windows')
	}
}