/**
 * Copyright 2021 Agnostiq Inc.
 *
 * This file is part of Covalent.
 *
 * Licensed under the GNU Affero General Public License 3.0 (the "License").
 * A copy of the License may be obtained with this software package or at
 *
 *      https://www.gnu.org/licenses/agpl-3.0.en.html
 *
 * Use of this file is prohibited except in compliance with the License. Any
 * modifications or derivative works of this file must retain this copyright
 * notice, and modified files must contain a notice indicating that they have
 * been altered from the originals.
 *
 * Covalent is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the License for more details.
 *
 * Relief from the License may be granted by purchasing a commercial license.
 */

import {
  AppBar,
  Container,
  Link,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'

import { ReactComponent as Logo } from '../assets/covalent-full-logo.svg'
import NavDrawer from '../components/common/NavDrawer'

const NotFound = ({ text = 'Page not found.', children }) => {
  return (
    <>
      <NavDrawer />
      <Container
        maxWidth="xl"
        sx={{
          mb: 4,
          mt: 7,
          ml: 10,
          width: '70%',
          '@media (min-width: 1700px)': {
            ml: '15%',
          },
        }}
      >
        <AppBar position="static" color="transparent">
          <Toolbar disableGutters sx={{ my: 2 }}>
            <Link href="/">
              <Logo data-testid="logo" />
            </Link>
          </Toolbar>
        </AppBar>

        <Paper elevation={4} sx={{ p: 2 }}>
          {children || (
            <Typography data-testid="message" variant="h5">
              {text}
            </Typography>
          )}
        </Paper>
      </Container>
    </>
  )
}

export default NotFound
